package io.justina.management.service.authentication;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.justina.management.dto.jwttoken.DataJWTTokenDTO;
import io.justina.management.dto.user.UserAuthenticateDataDTO;
import io.justina.management.model.User;
import io.justina.management.model.MedicalStaff;
import io.justina.management.repository.MedicalStaffRepository;
import io.justina.management.repository.UserRepository;
import io.justina.management.service.token.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;




@Service
public class AuthenticationService implements UserDetailsService, IAuthenticationService {

    private final UserRepository userRepository;
    private final MedicalStaffRepository medicalStaffRepository;
    private final TokenService tokenService;
    private final AuthenticationManager authenticationManager;

    @Autowired
    public AuthenticationService(UserRepository userRepository, MedicalStaffRepository medicalStaffRepository,TokenService tokenService, @Lazy AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.medicalStaffRepository = medicalStaffRepository;
        this.tokenService = tokenService;
        this.authenticationManager = authenticationManager;
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserDetails userDetails = userRepository.findByEmail(username);
        if(userDetails == null){
            userDetails = medicalStaffRepository.findByEmail(username);
        }
        if(userDetails == null){
            throw new UsernameNotFoundException("User not found");
        }
        return userDetails;
    }
    @Override
    public DataJWTTokenDTO authenticate(UserAuthenticateDataDTO userAuthenticateDataDTO){
        Authentication authenticationToken = new UsernamePasswordAuthenticationToken(userAuthenticateDataDTO.getEmail(), userAuthenticateDataDTO.getPassword());
        var entityAuth = authenticationManager.authenticate(authenticationToken).getPrincipal();
        if(entityAuth instanceof User){
            var jwtToken = tokenService.generateToken(entityAuth);
            return new DataJWTTokenDTO(jwtToken);
        } else if(entityAuth instanceof MedicalStaff){
            var jwtToken = tokenService.generateToken(entityAuth);
            return new DataJWTTokenDTO(jwtToken);
        } else{
            throw new RuntimeException("User not found");
        }
    }

    @Override
    public boolean isAdmin(Authentication authentication) {
        return authentication.getAuthorities().stream()
                .anyMatch(authority -> authority.getAuthority().equals("ROLE_ADMIN"));
    }

    @Override
    public boolean isAuthenticatedUserOwner(Long id) {
        Long authenticatedUserId = getAuthenticatedUserId();
        return authenticatedUserId.equals(id);
    }

    @Override
    public void verifyUserAccess(Long id) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!isAdmin(authentication) && !isAuthenticatedUserOwner(id)) {
            throw new AccessDeniedException("You do not have permissions to access this resource.");
        }
    }

    @Override
    public Long getAuthenticatedUserId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.getCredentials() != null) {
            String token = (String) authentication.getCredentials();
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(tokenService.getApiSecret().getBytes())
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
            return claims.get("id", Long.class);
        }
        throw new IllegalStateException("No se pudo obtener el ID del usuario autenticado");
    }

}
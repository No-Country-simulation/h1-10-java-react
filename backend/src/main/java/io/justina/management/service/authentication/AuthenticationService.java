package io.justina.management.service.authentication;

import io.justina.management.dto.jwttoken.DataJWTTokenDTO;
import io.justina.management.dto.user.UserAuthenticateDataDTO;
import io.justina.management.model.User;
import io.justina.management.repository.UserRepository;
import io.justina.management.service.token.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService implements UserDetailsService, IAuthenticationService {

    private final UserRepository userRepository;
    private final TokenService tokenService;
    private final AuthenticationManager authenticationManager;

    @Autowired
    public AuthenticationService(UserRepository userRepository,TokenService tokenService, @Lazy AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.tokenService = tokenService;
        this.authenticationManager = authenticationManager;
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByEmail(username);
    }
 @Override
    public DataJWTTokenDTO authenticate(UserAuthenticateDataDTO userAuthenticateDataDTO){
        Authentication authenticationToken = new UsernamePasswordAuthenticationToken(userAuthenticateDataDTO.getEmail(), userAuthenticateDataDTO.getPassword());
        var entityAuth = authenticationManager.authenticate(authenticationToken).getPrincipal();
        if(entityAuth instanceof User){
            var jwtToken = tokenService.generateToken(entityAuth);
            return new DataJWTTokenDTO(jwtToken);
        }else{
            throw new RuntimeException("User not found");
        }
    }



}

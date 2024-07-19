package io.justina.management.config.security;

import io.justina.management.model.MedicalStaff;
import io.justina.management.model.User;
import io.justina.management.repository.MedicalStaffRepository;
import io.justina.management.repository.UserRepository;
import io.justina.management.service.token.TokenService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collection;

@Component
public class SecurityFilter extends OncePerRequestFilter {

    private final TokenService tokenService;
    private final UserRepository userRepository;
    private final MedicalStaffRepository medicalStaffRepository;

    @Autowired
    public SecurityFilter(TokenService tokenService, UserRepository userRepository, MedicalStaffRepository medicalStaffRepository) {
        this.tokenService = tokenService;
        this.userRepository = userRepository;
        this.medicalStaffRepository = medicalStaffRepository;
    }
    public void doFilterInternal(HttpServletRequest request, @NonNull HttpServletResponse response, @NonNull FilterChain filterChain) throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.replace("Bearer ", "");
            String subject = tokenService.getSubject(token);

            if (subject != null) {
                User user = userRepository.findByEmail(subject);
                if (user != null) {
                    Collection<? extends GrantedAuthority> authorities = user.getAuthorities();
                    if (isAdmin(authorities)) {
                        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(user, null, authorities);
                        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                        SecurityContextHolder.getContext().setAuthentication(authentication);
                    } else {
                        MedicalStaff medicalStaff = medicalStaffRepository.findByUser_Email(subject);
                        if (medicalStaff != null && isDoctor(authorities)) {
                            Collection<? extends GrantedAuthority> doctorAuthorities = medicalStaff.getUser().getAuthorities();
                            UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(medicalStaff, null, doctorAuthorities);
                            authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                            SecurityContextHolder.getContext().setAuthentication(authentication);
                        }
                    }
                }
            }
        }
        filterChain.doFilter(request, response);
    }

    private boolean isAdmin(Collection<? extends GrantedAuthority> authorities) {
        return authorities.stream().anyMatch(auth -> auth.getAuthority().equals("ROLE_ADMIN"));
    }

    private boolean isDoctor(Collection<? extends GrantedAuthority> authorities) {
        return authorities.stream().anyMatch(auth -> auth.getAuthority().equals("ROLE_DOCTOR"));
    }



//    @Override
//    protected void doFilterInternal(HttpServletRequest request, @NonNull HttpServletResponse response, @NonNull FilterChain filterChain) throws ServletException, IOException {
//
//        String authHeader = request.getHeader("Authorization");
//        if (authHeader != null && authHeader.startsWith("Bearer ")) {
//            String token = authHeader.replace("Bearer ", "");
//            String subject = tokenService.getSubject(token);
//
//            if (subject != null) {
//                User user = userRepository.findByEmail(subject);
//                if (user != null && tokenService.hasRol(token, "ROLE_ADMIN")) {
//                    UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
//                    authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//                    SecurityContextHolder.getContext().setAuthentication(authentication);
//                } else {
//                    MedicalStaff medicalStaff = medicalStaffRepository.findByUser_Email(subject);
//                    if (medicalStaff != null && tokenService.hasRol(token, "ROLE_DOCTOR")) {
//                        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(medicalStaff, null, medicalStaff.getUser().getAuthorities());
//                        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//                        SecurityContextHolder.getContext().setAuthentication(authentication);
//                    }
//                }
//            }
//        }
//        filterChain.doFilter(request, response);
//    }
}


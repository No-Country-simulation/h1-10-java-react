package io.justina.management.config.security;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
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
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

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


    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response, @NonNull FilterChain filterChain) throws ServletException, IOException {
        String token = extractToken(request);

        if (token != null) {
            try {
                String subject = tokenService.getSubject(token);
                if (subject != null) {
                    UserDetails userDetails = getUserDetails(token, subject);
                    if (userDetails != null) {
                        UsernamePasswordAuthenticationToken authentication =
                                new UsernamePasswordAuthenticationToken(userDetails, token, userDetails.getAuthorities());
                        SecurityContextHolder.getContext().setAuthentication(authentication);
                    }
                }
            } catch (ExpiredJwtException e) {
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                response.getWriter().write("Token expired");
                return;
            } catch (MalformedJwtException e) {
                response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                response.getWriter().write("Invalid token");
                return;
            }
        }

        filterChain.doFilter(request, response);
    }

    private String extractToken(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            return authHeader.substring(7);
        }
        return null;
    }

    private UserDetails getUserDetails(String token, String subject) {
        if (tokenService.hasRol(token, "ROLE_ADMIN")) {
            return userRepository.findByEmail(subject);
        } else if (tokenService.hasRol(token, "ROLE_MEDICAL_STAFF")) {
            return medicalStaffRepository.findByEmail(subject);
        }
        return null;
    }
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, @NonNull HttpServletResponse response, @NonNull FilterChain filterChain) throws ServletException, IOException {
//
//        var authHeader = request.getHeader("Authorization");
//        if(authHeader != null) {
//            var token = authHeader.replace("Bearer ", "");
//            var subject = tokenService.getSubject(token);
//            if(subject != null){
//                if(tokenService.hasRol(token, "ROLE_ADMIN")){
//                    var user = userRepository.findByEmail(subject);
//                    if(user != null) {
//                        var authentication = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
//                        SecurityContextHolder.getContext()
//                                .setAuthentication(authentication);
//                    }
//                } else if(tokenService.hasRol(token, "ROLE_MEDICAL_STAFF")){
//                    var medicalStaff = medicalStaffRepository.findByEmail(subject);
//                    if(medicalStaff != null) {
//                        var authentication = new UsernamePasswordAuthenticationToken(medicalStaff, null, medicalStaff.getAuthorities());
//                        SecurityContextHolder.getContext()
//                                .setAuthentication(authentication);
//                    }
//                }
//            }
//        }
//        filterChain.doFilter(request, response);
//
//    }
}

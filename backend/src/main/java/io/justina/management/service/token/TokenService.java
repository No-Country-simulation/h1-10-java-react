package io.justina.management.service.token;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTCreator;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.interfaces.DecodedJWT;
import io.justina.management.model.User;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.security.core.GrantedAuthority;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Service
public class TokenService implements ITokenService {

    @Value("${api.security.secret}")
    private String apiSecret;

    public String generateToken(User user){
        if(user == null){
            throw new IllegalArgumentException("User cannot be null");
        }
        try{
            Algorithm algorithm = Algorithm.HMAC256(apiSecret);
            JWTCreator.Builder jwtBuilder = JWT.create().withIssuer("justina.io");
            return jwtBuilder
                        .withSubject(user.getEmail())
                        .withClaim("id", user.getId())
                        .withClaim("role", user.getRole().name())
                        .withClaim("authorities", getRoles(user))
                        .withExpiresAt(generateExpirationDate())
                        .sign(algorithm);


        }catch (JWTCreationException exception){
            throw new RuntimeException("Failed to create token.");

        }
    }

    public String getSubject(String token){
        if(token == null || token.isBlank()){
            throw new IllegalArgumentException("Token cannot be null or empty.");
        }
        DecodedJWT verifier;
        try {
            Algorithm algorithm = Algorithm.HMAC256(apiSecret);
            verifier = JWT.require(algorithm)
                    .withIssuer("justina.io")
                    .build()
                    .verify(token);
            verifier.getSubject();
        } catch (JWTCreationException exception){
            throw new RuntimeException();
        }
        if(verifier.getSubject() == null){
            throw new RuntimeException("Verifier invalid");
        }
        return verifier.getSubject();
    }

    private List<String> getRoles(User user){
        return user.getAuthorities().stream()
                    .map(GrantedAuthority::getAuthority)
                    .collect(Collectors.toList());

    }

    public boolean hasRol(String token, String role){
        if(token == null || token.isBlank()){
            throw new RuntimeException();
        }
        try{
            Algorithm algorithm = Algorithm.HMAC256(apiSecret);
            DecodedJWT decodedJWT = JWT.decode(token);
            JWTVerifier verifier = JWT.require(algorithm)
                    .withIssuer("justina.io")
                    .build();
            verifier.verify(token);
            List<String> authorities = decodedJWT.getClaim("authorities").asList(String.class);
            return authorities.contains(role);
        }catch (JWTDecodeException exception){
            return false;

        }
    }
    private Instant generateExpirationDate(){
        return LocalDateTime.now().plusHours(1).toInstant(ZoneOffset.of("-05:00"));
    }
}
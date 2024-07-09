package io.justina.management.service.token;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTCreator;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import io.justina.management.model.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.security.core.GrantedAuthority;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TokenService implements ITokenService {
    @Value("${api.security.secret}")
    private String apiSecret;


    public String generateToken(Object object){
        try{
            Algorithm algorithm = Algorithm.HMAC256(apiSecret);
            JWTCreator.Builder jwtBuilder = JWT.create().withIssuer("justina.io");
            if(object instanceof User user){
                return jwtBuilder
                        .withSubject(user.getEmail())
                        .withClaim("id", user.getId())
                        .withClaim("authorities", getRoles(user))
                        .withExpiresAt(generateExpirationDate())
                        .sign(algorithm);
                }else{
                    throw new IllegalArgumentException("Unsupported entity type for generating token.");
                }

        }catch (JWTCreationException exception){
            throw new RuntimeException();

        }
    }

    public String getSubject(String token){
        if(token == null){
            throw new RuntimeException();
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

    private List<String> getRoles(Object object){
        if(object instanceof User user){
            return user.getAuthorities().stream()
                    .map(GrantedAuthority::getAuthority)
                    .collect(Collectors.toList());
        }else{
            throw new IllegalArgumentException("Unsupported entity type for generating token.");
        }
    }

    public boolean hasRol(String token, String role){
        try{
            Algorithm algorithm = Algorithm.HMAC256(apiSecret);
            DecodedJWT decodedJWT = JWT.decode(token);
            return decodedJWT.getClaim("authorities").asList(String.class).contains(role);
        }catch (JWTCreationException exception){
            return false;

        }
    }
    private Instant generateExpirationDate(){
        return LocalDateTime.now().plusHours(1).toInstant(ZoneOffset.of("-05:00"));
    }
}

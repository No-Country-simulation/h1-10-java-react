package io.justina.management.service.token;

public interface ITokenService {
    String generateToken(Object object);
    String getSubject(String token);

}

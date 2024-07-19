package io.justina.management.service.token;

import io.justina.management.model.User;

public interface ITokenService {
    String generateToken(User user);
    String getSubject(String token);

}

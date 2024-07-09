package io.justina.management.service.authentication;

import io.justina.management.dto.jwttoken.DataJWTTokenDTO;
import io.justina.management.dto.user.UserAuthenticateDataDTO;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface IAuthenticationService {
    UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;
    DataJWTTokenDTO authenticate(UserAuthenticateDataDTO userAuthenticateDataDTO);

}

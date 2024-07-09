package io.justina.management.service.user;

import io.justina.management.dto.user.UserRegisterDataDTO;
import io.justina.management.dto.user.UserResponseDataDTO;

import java.util.List;

public interface IUserService {
    UserResponseDataDTO registerUser(UserRegisterDataDTO userRegisterDataDTO);
    List<UserResponseDataDTO> getAllUsers();
    UserResponseDataDTO getUserById(Long id);

}

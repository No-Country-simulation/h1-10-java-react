package io.justina.management.service.user;

import io.justina.management.dto.user.UserRegisterDataDTO;
import io.justina.management.dto.user.UserResponseDataDTO;
import io.justina.management.model.User;
import io.justina.management.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = (BCryptPasswordEncoder) passwordEncoder;
    }

    private final ModelMapper modelMapper = new ModelMapper();

    @Override
    @Transactional
    public UserResponseDataDTO registerUser(UserRegisterDataDTO userRegisterDataDTO) {
        User user = modelMapper.map(userRegisterDataDTO, User.class);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return modelMapper.map(user, UserResponseDataDTO.class);
    }

    @Override
    public List<UserResponseDataDTO> getAllUsers() {
        List<User> users = userRepository.findAll();
        Type listType = new org.modelmapper.TypeToken<List<UserResponseDataDTO>>() {}.getType();
        return modelMapper.map(users, listType);
    }

    @Override
    public UserResponseDataDTO getUserById(Long id) {
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent()){
            return modelMapper.map(user.get(), UserResponseDataDTO.class);
        }else{
            throw new RuntimeException("User not found with id: " + id);
        }
    }
}

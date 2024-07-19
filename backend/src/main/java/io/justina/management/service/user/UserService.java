package io.justina.management.service.user;

import io.justina.management.dto.user.UserRegisterDataDTO;
import io.justina.management.dto.user.UserResponseDataDTO;
import io.justina.management.enums.Role;
import io.justina.management.model.User;
import io.justina.management.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
        user.setRole(Role.ROLE_ADMIN);
        user.setActive(true);
        userRepository.save(user);
        return modelMapper.map(user, UserResponseDataDTO.class);
    }

    @Override
    public List<UserResponseDataDTO> getAllUsers() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        boolean hasAdminRole = authentication.getAuthorities().contains(new SimpleGrantedAuthority("ROLE_ADMIN"));
        if (!hasAdminRole) {
            throw new RuntimeException("Access denied. Only admins can perform this action.");
        }
        List<User> users = userRepository.findAll();
        List<User> adminUsers = users.stream()
                .filter(user -> user.getRole() == Role.ROLE_ADMIN)
                .collect(Collectors.toList());
        Type listType = new org.modelmapper.TypeToken<List<UserResponseDataDTO>>() {}.getType();
        return modelMapper.map(adminUsers, listType);
    }

//    @Override
//    public List<UserResponseDataDTO> getAllUsers() {
//        List<User> users = userRepository.findAll();
//        List<User> adminUsers = users.stream()
//                .filter(user -> user.getRole() == Role.ROLE_ADMIN)
//                .collect(Collectors.toList());
//        Type listType = new org.modelmapper.TypeToken<List<UserResponseDataDTO>>() {}.getType();
//        return modelMapper.map(adminUsers, listType);
//    }

    @Override
    public UserResponseDataDTO getUserById(Long id) {
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent() && user.get().getRole() == Role.ROLE_ADMIN){
            return modelMapper.map(user.get(), UserResponseDataDTO.class);
        }else{
            throw new RuntimeException("User not found with id: " + id);
        }
    }
}

package io.justina.management.controller.user;

import io.justina.management.dto.user.UserRegisterDataDTO;
import io.justina.management.dto.user.UserResponseDataDTO;
import io.justina.management.service.user.IUserService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("v1/api/user")
public class UserController {


    private final IUserService userService;
    @Autowired
    public UserController(IUserService userService){
        this.userService = userService;
    }

    @PostMapping("/register")
    @Operation(summary = "Register a new user")
    public ResponseEntity<UserResponseDataDTO> registerUser(@RequestBody @Valid UserRegisterDataDTO userRegisterDataDTO){
        UserResponseDataDTO user = userService.registerUser(userRegisterDataDTO);
        return ResponseEntity.ok(user);
    }
    @GetMapping("/getAll")
    @Operation(summary = "Get all users")
    public ResponseEntity<List<UserResponseDataDTO>> getAllUsers(){
        return ResponseEntity.ok(userService.getAllUsers());
    }
    @GetMapping("/{id}")
    @Operation(summary = "Get user by id")
    public ResponseEntity<UserResponseDataDTO> getUserById(@PathVariable Long id){
        return ResponseEntity.ok(userService.getUserById(id));
    }
}

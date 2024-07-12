package io.justina.management.dto.user;

import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserRegisterDataDTO{
    private String firstName;
    private String lastName;
    @Email
    private String email;
    private String password;
}

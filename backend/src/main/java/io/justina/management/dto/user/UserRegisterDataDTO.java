package io.justina.management.dto.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserRegisterDataDTO{
    private String firstName;
    private String lastName;
    private String email;
    private String password;
}

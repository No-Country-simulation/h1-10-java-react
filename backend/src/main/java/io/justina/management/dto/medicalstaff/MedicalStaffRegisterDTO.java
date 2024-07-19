package io.justina.management.dto.medicalstaff;

import io.justina.management.enums.Specialty;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MedicalStaffRegisterDTO {
    private String firstName;
    private String lastName;
    @Email
    private String email;
    private String password;
    private String phone;
    private Integer medicalRegistrationNumber;
    private Specialty specialities;
    private String description;
    private Boolean active;
}

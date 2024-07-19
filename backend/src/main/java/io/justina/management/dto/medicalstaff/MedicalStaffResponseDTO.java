package io.justina.management.dto.medicalstaff;

import io.justina.management.enums.Specialty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MedicalStaffResponseDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private Integer medicalRegistrationNumber;
    private Set<Specialty> specialities;
    private String description;
}

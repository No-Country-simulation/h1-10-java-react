package io.justina.management.dto.patient;

import jakarta.persistence.Column;
import lombok.Data;

import java.time.LocalDate;

@Data
public class PatientResponseDTO {
    private String firstName;
    private String idNumber;
    private LocalDate birthDate;
    private String bloodType;
    private String bloodFactor;
    private Boolean active;
    private char sex;
}

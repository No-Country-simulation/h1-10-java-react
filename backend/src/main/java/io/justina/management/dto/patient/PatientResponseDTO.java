package io.justina.management.dto.patient;

import lombok.Data;

import java.time.LocalDate;

/**
 * Clase DTO (Data Transfer Object) que representa la respuesta de información de un paciente.
 */
@Data
public class PatientResponseDTO {

    /**
     * Nombre del paciente.
     */
    private String firstName;

    /**
     * Número de identificación del paciente.
     */
    private String idNumber;

    /**
     * Fecha de nacimiento del paciente.
     */
    private LocalDate birthDate;

    /**
     * Tipo de sangre del paciente.
     */
    private String bloodType;

    /**
     * Factor de sangre del paciente.
     */
    private String bloodFactor;

    /**
     * Indicador de activación del paciente.
     */
    private Boolean active;

    /**
     * Sexo del paciente.
     */
    private char sex;
}

package io.justina.management.dto.patient;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
/**
 * Data Transfer Object (DTO) que representa la solicitud de un paciente.
 * Contiene información básica del paciente para su registro.
 */
@Data
public class PatientRequestDTO {
    /**
     * Nombre del paciente.
     */
    @NotBlank(message = "El nombre es obligatorio")
    private String firstName;
    /**
     * Apellido del paciente.
     */
    @NotBlank(message = "El apellido es obligatorio")
    private String lastName;
    /**
     * Número de identificación del paciente.
     */
    @NotBlank(message = "El número de identificación es obligatorio")
    private String identificationNumber;
    /**
     * Correo electrónico del paciente.
     */
    @NotBlank(message = "El correo electrónico es obligatorio")
    @Email(message = "Debe ser una dirección de correo electrónico válida")
    private String email;
    /**
     * Contraseña del paciente.
     */
    @NotBlank(message = "La contraseña es obligatoria")
    @Size(min = 6, message = "La contraseña debe tener al menos 6 caracteres")
    private String password;
    /**
     * Número de teléfono del paciente.
     */
    private String phone;
    /**
     * Dirección del paciente.
     */
    private String address;
    /**
     * Fecha de nacimiento del paciente en formato de cadena.
     */
    private String birthDate;
    /**
     * Tipo de sangre del paciente.
     */
    private String bloodType;
    /**
     * Factor Rh del paciente.
     */
    private String bloodFactor;
    /**
     * Sexo del paciente (carácter único, por ejemplo, 'M' para masculino, 'F' para femenino).
     */
    private char sex;
}

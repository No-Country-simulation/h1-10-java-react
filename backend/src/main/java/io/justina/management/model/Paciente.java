package io.justina.management.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.UUID;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "pacientes")
@Entity
public class Patient implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id_paciente")
    private UUID idPatient;

    private String nombre;

    private String apellido;

    @Column(name = "numero_documento")
    private String numeroDocumento;

    @Column(name = "fecha_nacimiento")
    private LocalDate fechaNacimiento;

    @Column(name = "grupo_sanguineo")
    private String grupoSanguineo;

    @Column(name = "factor_sanguineo")
    private String factorSanguineo;

    private char sexo;
    /*
    * posibles relaciones
    * Patologias
    * Personal Medico
    * Tratamiento
    * Financiadores
    * Paciente
    * */
}

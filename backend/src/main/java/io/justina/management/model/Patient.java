package io.justina.management.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;
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

    private String name;

    private String lastname;

    @Column(name = "numero_documento")
    private String idNumber;

    @Column(name = "fecha_nacimiento")
    private LocalDate birthDate;

    @Column(name = "grupo_sanguineo")
    private String bloodType;

    @Column(name = "factor_sanguineo")
    private String bloodFactor;

    @Column(name = "activo")
    private Boolean active;

    @Column(name = "sexo")
    private char sex;

    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Appointment> appointments;

    /*
    * posibles relaciones
    * Patologias
    * Personal Medico
    * Tratamiento
    * Financiadores
    * Paciente
    * */
}

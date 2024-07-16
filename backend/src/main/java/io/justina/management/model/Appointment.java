package io.justina.management.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "turnos")
@Entity
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id_turno")
    private UUID idAppointment;

    private String speciality;

    private String professional;

    @Column(name= "centro_atencion")
    private String healthCenter;

    @Column(name = "fecha_turno")
    private LocalDateTime date;

    @ManyToOne
    @JoinColumn(name = "id_paciente")
    private Patient patient;

    /*
    * AGREGAR DESCRIPCION PARA EL TURNO
    *
    * */
}

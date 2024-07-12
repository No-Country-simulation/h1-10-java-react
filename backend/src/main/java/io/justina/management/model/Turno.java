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
public class Turno {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id_turno")
    private UUID idTurno;

    private String especialidad;

    private String profesional;

    @Column(name= "centro_atencion")
    private String centro;

    @Column(name = "fecha_turno")
    private LocalDateTime fecha;

    @ManyToOne
    @JoinColumn(name = "id_paciente")
    private Paciente paciente;

    /*
    * AGREGAR DESCRIPCION PARA EL TURNO
    *
    * */
}

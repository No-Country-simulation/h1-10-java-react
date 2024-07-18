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

    @Column(name = "especialidad")
    private String speciality ;

    @Column(name= "centro_atencion")
    private String healthCenter;

    @Column(name = "fecha_turno")
    private LocalDateTime date;

    @ManyToOne
    @JoinColumn(name = "id_paciente")
    private Patient patient;

    @ManyToOne
    @JoinColumn(name = "professional_id")
    private MedicalStaff professional;


    /*
    * AGREGAR DESCRIPCION PARA EL TURNO
    *private AppointmentType appointmentType;
    private Integer durationMinutes;
    private String notes;
    private String reason;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private LocalDateTime cancelledAt;
    private String cancellationReason;
    private boolean reminderSent;
    private boolean confirmed;
    private String location;
    private String virtualMeetingLink;
    private String insuranceDetails;
    private boolean followUpRequired;
    private boolean completed;
    * */
}

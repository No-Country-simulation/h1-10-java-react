package io.justina.management.model;

import io.justina.management.enums.Role;
import io.justina.management.enums.Specialty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;
import java.util.Set;


@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "medical_staff")
public class MedicalStaff {

    @Id
    @Column(name = "id_personal_medico")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long medicalStaffId;
    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
    @Column(name="telefono")
    private String phone;
    @Column(name = "numero_registro_medico")
    private Integer medicalRegistrationNumber;
    @ElementCollection(targetClass = Specialty.class)
    @CollectionTable(name = "especialidades_personal_medico")
    @Column(name = "especialidad")
    @Enumerated(EnumType.STRING)
    private Set<Specialty> specialities;
    @Column(name = "descripcion")
    private String description;
    @OneToMany(mappedBy = "professional")
    private List<Appointment> appointments;

    public Role getRole() {
        return user != null ? user.getRole() : null;
    }

}

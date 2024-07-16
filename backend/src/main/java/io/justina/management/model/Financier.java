package io.justina.management.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "financiadores")
@Entity
public class Financier {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id_financiador")
    private UUID idFinancier;
}

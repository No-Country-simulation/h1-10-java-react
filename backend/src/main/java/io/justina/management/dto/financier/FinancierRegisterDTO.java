package io.justina.management.dto.financier;



import lombok.Data;

import java.util.UUID;
@Data
public class FinancierRegisterDTO {

    private UUID idFinancier;
    private String name;
    private String plan;
}

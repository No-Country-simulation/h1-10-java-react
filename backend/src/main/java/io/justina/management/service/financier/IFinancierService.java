package io.justina.management.service.financier;

import io.justina.management.dto.financier.FinancierRegisterDTO;
import io.justina.management.dto.financier.FinancierResponseDTO;


import java.util.List;
import java.util.UUID;

public interface IFinancierService {

    List<FinancierResponseDTO> getAllFinanciers();
    FinancierResponseDTO getFinancierById(UUID financierId);
    FinancierResponseDTO registerFinancier(FinancierRegisterDTO financier);


}

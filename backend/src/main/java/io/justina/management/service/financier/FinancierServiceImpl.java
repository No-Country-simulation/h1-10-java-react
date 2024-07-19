package io.justina.management.service.financier;

import io.justina.management.dto.financier.FinancierRegisterDTO;
import io.justina.management.dto.financier.FinancierResponseDTO;
import io.justina.management.model.Financier;
import io.justina.management.repository.FinancierRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class FinancierServiceImpl implements IFinancierService {

    private final FinancierRepository financierRepository;
    private final ModelMapper modelMapper = new ModelMapper();

    @Autowired
    public FinancierServiceImpl(FinancierRepository financierRepository) {
        this.financierRepository = financierRepository;
    }

    @Override
    public List<FinancierResponseDTO> getAllFinanciers() {
        List<Financier> financierResponseDTOList = financierRepository.findAll();
        Type listType = new TypeToken<List<FinancierResponseDTO>>() {}.getType();
        return modelMapper.map(financierResponseDTOList, listType);
    }

    @Override
    public FinancierResponseDTO getFinancierById(UUID financierId) {
        Optional<Financier> financier = financierRepository.findById(financierId);
        if (financier.isPresent()) {
            return modelMapper.map(financier, FinancierResponseDTO.class);
        }else{
            throw new RuntimeException("Financier not found");
        }

    }

    @Override
    public FinancierResponseDTO registerFinancier(FinancierRegisterDTO financier) {
        Financier financierEntity = modelMapper.map(financier, Financier.class);
        financierRepository.save(financierEntity);
        return modelMapper.map(financierEntity, FinancierResponseDTO.class);
    }


}

package io.justina.management.service.medicalstaff;

import io.justina.management.dto.medicalstaff.MedicalStaffRegisterDTO;
import io.justina.management.dto.medicalstaff.MedicalStaffResponseDTO;
import io.justina.management.model.MedicalStaff;
import io.justina.management.repository.MedicalStaffRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.lang.reflect.Type;

import java.util.List;
import java.util.Optional;

@Service
public class MedicalStaffService implements IMedicalStaffService{

    private final MedicalStaffRepository medicalStaffRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public MedicalStaffService(MedicalStaffRepository medicalStaffRepository, PasswordEncoder passwordEncoder) {
        this.medicalStaffRepository = medicalStaffRepository;
        this.passwordEncoder = (BCryptPasswordEncoder) passwordEncoder;
    }

    private final ModelMapper modelMapper = new ModelMapper();

    @Override
    @Transactional
    public MedicalStaffResponseDTO registerMedicalStaff(MedicalStaffRegisterDTO medicalStaffRegisterDTO) {
        MedicalStaff medicalStaff = modelMapper.map(medicalStaffRegisterDTO, MedicalStaff.class);
        medicalStaff.setPassword(passwordEncoder.encode(medicalStaff.getPassword()));
        medicalStaffRepository.save(medicalStaff);
        return modelMapper.map(medicalStaff, MedicalStaffResponseDTO.class);
    }

    @Override
    public MedicalStaffResponseDTO getMedicalStaffById(Long id) {
        Optional<MedicalStaff> medicalStaff = medicalStaffRepository.findById(id);
        if(medicalStaff.isPresent()){
            return modelMapper.map(medicalStaff.get(), MedicalStaffResponseDTO.class);
        }else{
            throw new RuntimeException("Medical Staff not found with id: " + id);
        }
    }

    @Override
    public List<MedicalStaffResponseDTO> getAllMedicalStaff() {
        List<MedicalStaff> medicalStaffs = medicalStaffRepository.findAll();
        Type listType = new org.modelmapper.TypeToken<List<MedicalStaffResponseDTO>>() {}.getType();
        return modelMapper.map(medicalStaffs, listType);
    }
    @Transactional
    @Override
    public void deactivateMedicalStaff(Long id) {
        Optional<MedicalStaff> medicalStaff = medicalStaffRepository.findById(id);
        if(medicalStaff.isPresent()){
            medicalStaff.get().setActive(false);
            medicalStaffRepository.save(medicalStaff.get());
        }else{
            throw new RuntimeException("Medical Staff not found with id: " + id);
        }

    }
    @Override
    public List<MedicalStaffResponseDTO> getMedicalStaffByActive() {
        List<MedicalStaff> medicalStaffs = medicalStaffRepository.findByActiveTrue();
        Type listType = new org.modelmapper.TypeToken<List<MedicalStaffResponseDTO>>() {}.getType();
        return modelMapper.map(medicalStaffs, listType);
    }
}

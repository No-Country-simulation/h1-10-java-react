package io.justina.management.service.medicalstaff;

import io.justina.management.dto.medicalstaff.MedicalStaffRegisterDTO;
import io.justina.management.dto.medicalstaff.MedicalStaffResponseDTO;
import io.justina.management.enums.Role;
import io.justina.management.model.MedicalStaff;
import io.justina.management.model.User;
import io.justina.management.repository.MedicalStaffRepository;
import io.justina.management.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.lang.reflect.Type;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class MedicalStaffService implements IMedicalStaffService{

    private final MedicalStaffRepository medicalStaffRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    @Autowired
    public MedicalStaffService(MedicalStaffRepository medicalStaffRepository, UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.medicalStaffRepository = medicalStaffRepository;
        this.passwordEncoder = (BCryptPasswordEncoder) passwordEncoder;
        this.userRepository = userRepository;
    }

    private final ModelMapper modelMapper = new ModelMapper();

    @Override
    @Transactional
    public MedicalStaffResponseDTO registerMedicalStaff(MedicalStaffRegisterDTO medicalStaffRegisterDTO) {
        User user = userRepository.findByEmail(medicalStaffRegisterDTO.getEmail());
        if (user == null) {
            user = modelMapper.map(medicalStaffRegisterDTO, User.class);
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            user.setRole(Role.ROLE_DOCTOR);
            user.setActive(true);
            userRepository.save(user);
        }

        MedicalStaff existingMedicalStaff = medicalStaffRepository.findByUser(user);

        if (existingMedicalStaff == null) {
            MedicalStaff medicalStaff = modelMapper.map(medicalStaffRegisterDTO, MedicalStaff.class);
            medicalStaff.setUser(user);
            medicalStaffRepository.save(medicalStaff);
            user.setMedicalStaff(medicalStaff);
            userRepository.save(user);
        } else {
            existingMedicalStaff.setPhone(medicalStaffRegisterDTO.getPhone());
            existingMedicalStaff.setMedicalRegistrationNumber(medicalStaffRegisterDTO.getMedicalRegistrationNumber());
            existingMedicalStaff.setSpecialities(Collections.singleton(medicalStaffRegisterDTO.getSpecialities()));
            existingMedicalStaff.setDescription(medicalStaffRegisterDTO.getDescription());
            medicalStaffRepository.save(existingMedicalStaff);
        }

        MedicalStaff savedMedicalStaff = medicalStaffRepository.findByUser(user);
        return modelMapper.map(savedMedicalStaff, MedicalStaffResponseDTO.class);
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
        MedicalStaff medicalStaff = medicalStaffRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Medical Staff not found with id: " + id));

        User user = medicalStaff.getUser();
        if (user != null) {
            user.setActive(false);
            userRepository.save(user);
        } else {
            throw new RuntimeException("User not found for Medical Staff with id: " + id);
        }
    }
    @Override
    public List<MedicalStaffResponseDTO> getMedicalStaffByActive() {
        List<MedicalStaff> medicalStaffs = medicalStaffRepository.findByUser_ActiveTrue();
        Type listType = new org.modelmapper.TypeToken<List<MedicalStaffResponseDTO>>() {}.getType();
        return modelMapper.map(medicalStaffs, listType);
    }
}

package io.justina.management.service.patient;

import io.justina.management.config.mapper.ModelMapperConfig;
import io.justina.management.dto.patient.PatientResponseDTO;
import io.justina.management.model.MedicalStaff;
import io.justina.management.model.Patient;
import io.justina.management.repository.PatientRepository;
import jakarta.persistence.EntityNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PatientServiceImpl implements PatientService{

    @Autowired
    PatientRepository patientRepository;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public List<PatientResponseDTO> getAllPatients() {
/*        modelMapper.typeMap(Patient.class, PatientResponseDTO.class).addMappings(mapper ->
                mapper.map(src -> src.getUser().getFirstName(), PatientResponseDTO::setFirstName));
        */
            return patientRepository.findAll().stream()
                    .map(patient -> modelMapper.map(patient, PatientResponseDTO.class))
                    .toList();
    }

    @Override
    public Patient getPatientById(UUID patientId) {
        return patientRepository.findById(patientId)
                .orElseThrow(() -> new IllegalArgumentException("Patient not found"));
    }

    @Override
    public Patient createPatient(Patient patient) {
        return patientRepository.save(patient);
    }

    @Override
    public void deactivatePatient(UUID patientId) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new EntityNotFoundException("Patient not found with id: " + patientId));
        patient.setActive(false);
        patientRepository.save(patient);
    }
}

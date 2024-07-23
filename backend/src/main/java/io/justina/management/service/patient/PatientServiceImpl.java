package io.justina.management.service.patient;


import io.justina.management.dto.patient.PatientResponseDTO;
import io.justina.management.model.Patient;
import io.justina.management.repository.PatientRepository;
import jakarta.persistence.EntityNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

/**
 * Implementación del servicio para gestionar pacientes en el sistema.
 */
@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    PatientRepository patientRepository;

    @Autowired
    ModelMapper modelMapper;

    /**
     * Obtiene todos los pacientes registrados en el sistema.
     *
     * @return Lista de todos los pacientes como objetos PatientResponseDTO.
     */
    @Override
    public List<PatientResponseDTO> getAllPatients() {
        // Mapeo personalizado para incluir el nombre del paciente desde el usuario asociado
        modelMapper.typeMap(Patient.class, PatientResponseDTO.class)
                .addMappings(mapper -> mapper.map(src -> src.getUser().getFirstName(), PatientResponseDTO::setFirstName));

        return patientRepository.findAll().stream()
                .map(patient -> modelMapper.map(patient, PatientResponseDTO.class))
                .toList();
    }

    /**
     * Obtiene un paciente por su ID.
     *
     * @param patientId ID del paciente que se desea obtener.
     * @return Objeto Patient correspondiente al paciente encontrado.
     * @throws IllegalArgumentException Si no se encuentra un paciente con el ID especificado.
     */
    @Override
    public Patient getPatientById(UUID patientId) {
        return patientRepository.findById(patientId)
                .orElseThrow(() -> new IllegalArgumentException("Patient not found"));
    }

    /**
     * Crea un nuevo paciente en el sistema.
     *
     * @param patient Objeto que representa al paciente que se desea crear.
     * @return Objeto Patient creado.
     */
    @Override
    public Patient createPatient(Patient patient) {
        return patientRepository.save(patient);
    }

    /**
     * Desactiva a un paciente por su ID.
     *
     * @param patientId ID del paciente que se desea desactivar.
     * @throws EntityNotFoundException Si no se encuentra un paciente con el ID especificado.
     */
    @Override
    public void deactivatePatient(UUID patientId) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new EntityNotFoundException("Patient not found with id: " + patientId));
        patient.setActive(false);
        patientRepository.save(patient);
    }
}

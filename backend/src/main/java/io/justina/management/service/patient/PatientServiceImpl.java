package io.justina.management.service.patient;

import io.justina.management.model.Paciente;
import io.justina.management.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientServiceImpl implements PatientService{

    @Autowired
    PatientRepository patientRepository;

    @Override
    public List<Paciente> getAllPatients() {
        return patientRepository.findAll();
    }
}

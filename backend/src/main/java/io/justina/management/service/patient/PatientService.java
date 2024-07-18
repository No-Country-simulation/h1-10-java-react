package io.justina.management.service.patient;

import io.justina.management.model.Patient;

import java.util.List;

public interface PatientService {

    List<Patient> getAllPatients();
    Patient createPatient(Patient patient);
}

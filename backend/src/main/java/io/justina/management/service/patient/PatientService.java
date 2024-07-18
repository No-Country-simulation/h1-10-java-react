package io.justina.management.service.patient;


import io.justina.management.model.Patient;

import java.util.List;
import java.util.UUID;

public interface PatientService {

    List<Patient> getAllPatients();
    Patient getPatientById(UUID patientId);
    Patient createPatient(Patient patient);
    void deactivatePatient(UUID patientId);

}

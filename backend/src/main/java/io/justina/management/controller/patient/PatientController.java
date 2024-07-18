package io.justina.management.controller.patient;

import io.justina.management.model.Patient;
import io.justina.management.service.patient.PatientServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("v1/api/patient")
public class PatientController {

    @Autowired
    PatientServiceImpl patientService;

    @GetMapping("/patients")
    public ResponseEntity<List<Patient>> findAll() {
        List<Patient> patientList = patientService.getAllPatients();
        return new ResponseEntity<>(patientList, HttpStatus.OK);
    }

    public ResponseEntity<Patient> findById(@PathVariable UUID id) {
        return new ResponseEntity<>(patientService.getPatientById(id), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Patient> createPatient(Patient patient) {
        Patient createdPatient = patientService.createPatient(patient);
        return new ResponseEntity<>(createdPatient, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<Void> deletePatient(@PathVariable UUID id) {
        patientService.deactivatePatient(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }




}

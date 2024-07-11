package io.justina.management.controller.Patient;

import io.justina.management.model.Patient;
import io.justina.management.service.patient.PatientServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/patients")
public class PatientController {

    @Autowired
    PatientServiceImpl patientService;

    @GetMapping
    public ResponseEntity<List<Patient>> findAll() {
        List<Patient> patientList = patientService.getAllPatients();
        return new ResponseEntity<>(patientList, HttpStatus.OK);
    }
}

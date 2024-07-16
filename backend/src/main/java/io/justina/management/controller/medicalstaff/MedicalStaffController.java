package io.justina.management.controller.medicalstaff;

import io.justina.management.dto.medicalstaff.MedicalStaffRegisterDTO;
import io.justina.management.dto.medicalstaff.MedicalStaffResponseDTO;
import io.justina.management.service.authentication.AuthenticationService;
import io.justina.management.service.medicalstaff.IMedicalStaffService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("v1/api/medical-staff")
public class MedicalStaffController {

    private final IMedicalStaffService medicalStaffService;
    private final AuthenticationService authenticationService;
    @Autowired
    public MedicalStaffController(IMedicalStaffService medicalStaffService, AuthenticationService authorizationService){
        this.medicalStaffService = medicalStaffService;
        this.authenticationService = authorizationService;
    }

    @PostMapping("/register")
    @Operation(summary = "Register a new medical staff")
    public ResponseEntity<MedicalStaffResponseDTO> registerMedicalStaff(@RequestBody @Valid MedicalStaffRegisterDTO medicalStaffRegisterDTO){
        MedicalStaffResponseDTO medicalStaff = medicalStaffService.registerMedicalStaff(medicalStaffRegisterDTO);
        return ResponseEntity.ok(medicalStaff);
    }

    @GetMapping("/getAll")
    @Operation(summary = "Get all medical staff")
    public ResponseEntity<List<MedicalStaffResponseDTO>> getAllMedicalStaff(){
        return ResponseEntity.ok(medicalStaffService.getAllMedicalStaff());
    }
    @GetMapping("/getActive")
    @Operation(summary = "Get all active medical staff")
    public ResponseEntity<List<MedicalStaffResponseDTO>> getMedicalStaffByActive(){
        return ResponseEntity.ok(medicalStaffService.getMedicalStaffByActive());
    }


    @GetMapping("/{id}")
    @Operation(summary = "Get medical staff by id")
    public ResponseEntity<MedicalStaffResponseDTO> getMedicalStaffById(@PathVariable Long id){
        try {
            authenticationService.verifyUserAccess(id);
            return ResponseEntity.ok(medicalStaffService.getMedicalStaffById(id));
        } catch (AccessDeniedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
    @DeleteMapping("delete/{id}")
    @Operation(summary = "Deactivate medical staff by id")
    public ResponseEntity<Void> deactivateMedicalStaff(@PathVariable Long id){
        try {
            authenticationService.verifyUserAccess(id);
            medicalStaffService.deactivateMedicalStaff(id);
            return ResponseEntity.ok().build();
        } catch (AccessDeniedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}

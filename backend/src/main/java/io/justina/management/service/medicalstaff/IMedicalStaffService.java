package io.justina.management.service.medicalstaff;

import io.justina.management.dto.medicalstaff.MedicalStaffResponseDTO;
import io.justina.management.dto.medicalstaff.MedicalStaffRegisterDTO;

import java.util.List;

public interface IMedicalStaffService {
    MedicalStaffResponseDTO registerMedicalStaff(MedicalStaffRegisterDTO medicalStaffRegisterDTO);
    MedicalStaffResponseDTO getMedicalStaffById(Long id);
    List<MedicalStaffResponseDTO> getAllMedicalStaff();
    void deactivateMedicalStaff(Long id);
    List<MedicalStaffResponseDTO> getMedicalStaffByActive();
}

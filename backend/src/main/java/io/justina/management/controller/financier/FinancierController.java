package io.justina.management.controller.financier;

import io.justina.management.dto.financier.FinancierRegisterDTO;
import io.justina.management.dto.financier.FinancierResponseDTO;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import io.justina.management.service.financier.IFinancierService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("v1/api/financier")
public class FinancierController {

    private final IFinancierService financierService;

    @Autowired
    public FinancierController(IFinancierService financierService) {
        this.financierService = financierService;
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<FinancierResponseDTO>> getAllFinanciers() {
        return ResponseEntity.ok(financierService.getAllFinanciers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<FinancierResponseDTO> getFinancierById(@PathVariable UUID id) {
        return ResponseEntity.ok(financierService.getFinancierById(id));
    }

    @PostMapping("/register")
    public ResponseEntity<FinancierResponseDTO> registerFinancier(@RequestBody @Valid FinancierRegisterDTO financier) {
        return ResponseEntity.ok(financierService.registerFinancier(financier));
    }
}

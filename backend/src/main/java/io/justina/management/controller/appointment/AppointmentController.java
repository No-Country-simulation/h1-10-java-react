package io.justina.management.controller.appointment;


import io.justina.management.model.Appointment;
import io.justina.management.service.Appointment.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/appointment")
public class AppointmentController {

    @Autowired
    AppointmentService appointmentService;


    @GetMapping()
    public ResponseEntity<List<Appointment>> findAll() {
        return new ResponseEntity<>(appointmentService.getAllAppointments(), HttpStatus.OK);
    }
}

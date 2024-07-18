package io.justina.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface Appointment extends JpaRepository<Appointment, UUID> {
}

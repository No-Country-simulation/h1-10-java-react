package io.justina.management.repository;

import io.justina.management.model.Financier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface FinancierRepository extends JpaRepository<Financier, UUID> {
}

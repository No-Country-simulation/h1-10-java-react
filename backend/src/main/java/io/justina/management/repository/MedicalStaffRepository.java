package io.justina.management.repository;

import io.justina.management.model.MedicalStaff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicalStaffRepository extends JpaRepository<MedicalStaff, Long> {
    UserDetails findByEmail(String email);
    @Query("""
            select m.active
            from MedicalStaff m
            where m.id=:id
            """)
    Boolean findActiveById(Long id);
}
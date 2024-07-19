package io.justina.management.repository;

import io.justina.management.model.MedicalStaff;
import io.justina.management.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicalStaffRepository extends JpaRepository<MedicalStaff, Long> {
    MedicalStaff findByUser_Email(String email);
    List<MedicalStaff> findByUser_ActiveTrue();
    MedicalStaff findByUser(User user);


}

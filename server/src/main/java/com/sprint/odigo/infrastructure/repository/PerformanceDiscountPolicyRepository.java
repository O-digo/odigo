package com.sprint.odigo.infrastructure.repository;

import com.sprint.odigo.domain.entity.ticketing.PerformanceDiscountPolicy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface PerformanceDiscountPolicyRepository extends JpaRepository<PerformanceDiscountPolicy, UUID> {
    PerformanceDiscountPolicy findByPerformanceIdAndName(UUID performanceId, String policyName);
}

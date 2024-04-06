package com.sprint.odigo.infrastructure.repository;

import com.sprint.odigo.domain.entity.notification.TicketCancelNotification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface TicketCancelNotificationRepository extends JpaRepository<TicketCancelNotification, Integer> {
    List<TicketCancelNotification> findAllByPerformanceId(UUID performanceId);
}

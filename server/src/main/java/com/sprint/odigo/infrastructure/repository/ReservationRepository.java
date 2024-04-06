package com.sprint.odigo.infrastructure.repository;

import com.sprint.odigo.domain.entity.ticketing.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer> {
    Reservation findReservationByNameAndPhoneNumber(String name, String phoneNumber);

    Reservation findReservationByPerformanceIdAndRoundAndGateAndLineAndSeatAndNameAndPhoneNumber(UUID performanceId, int round, int gate, char line, int seat, String userName, String phoneNumber);
}

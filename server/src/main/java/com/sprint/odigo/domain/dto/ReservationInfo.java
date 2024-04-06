package com.sprint.odigo.domain.dto;

import lombok.*;

import java.util.UUID;

@Getter
@Setter
@RequiredArgsConstructor
@Builder
public class ReservationInfo {
    private final UUID performanceId;
    private final int round;
    private final int gate;
    private final char line;
    private final int seat;
    private final String userName;
    private final String phoneNumber;
}

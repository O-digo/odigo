package com.sprint.odigo.domain.dto;

import com.sprint.odigo.domain.entity.notification.TicketCancelNotification;
import lombok.Builder;
import lombok.Getter;

import java.util.UUID;
@Builder
@Getter
public class NotificationRegister {
    private final UUID performanceId;
    private final String userName;
    private final String phoneNumber;
    private final String emailAddress;

    public static NotificationRegister of(TicketCancelNotification entity) {
        return NotificationRegister.builder()
            .performanceId(entity.getPerformanceId())
            .userName(entity.getName())
            .phoneNumber(entity.getPhoneNumber())
            .emailAddress(entity.getEmailAddress())
            .build();

    }
}

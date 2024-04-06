package com.sprint.odigo.application.cancel.v2;

import com.sprint.odigo.domain.dto.ReservationInfo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;
import org.springframework.transaction.event.TransactionalEventListener;

@Component
@Slf4j
public class TicketCancelNotificationV2 {

    @Async("threadPoolTaskExecutor")
    @TransactionalEventListener
    public void onTicketCancelHandler(ReservationInfo cancelMessage) {
        log.info("Event Message => {}", cancelMessage);
    }
}

package com.sprint.odigo.domain.dto.request;

import org.springframework.context.ApplicationEvent;

public class TicketCancelEvent extends ApplicationEvent {
    public TicketCancelEvent(Object source) {
        super(source);
    }
}

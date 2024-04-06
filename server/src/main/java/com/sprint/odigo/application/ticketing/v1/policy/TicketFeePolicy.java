package com.sprint.odigo.application.ticketing.v1.policy;

import com.sprint.odigo.domain.dto.Ticket;

import java.util.Set;

public class TicketFeePolicy {
    private final Set<Ticket> tickets;

    public TicketFeePolicy(Set<Ticket> tickets) {
        this.tickets = tickets;
    }

    public int calculateFee() {
        int totalPrice = 0;
        for(Ticket t : tickets){
            totalPrice += calculateTicketFee(t);
        }
        return totalPrice;
    }

    protected int calculateTicketFee(Ticket t){
        return t.getPrice();
    };
}

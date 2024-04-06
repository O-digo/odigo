package com.sprint.odigo.application.ticketing.v3;

import com.sprint.odigo.application.ticketing.v3.policy.DiscountPolicy;
import com.sprint.odigo.application.ticketing.v3.policy.DiscountPolicyFactory;
import com.sprint.odigo.domain.dto.request.RequestReservation;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.UUID;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class TicketFactory {
    private final DiscountPolicyFactory discountPolicyFactory;

    public TicketV3 ticketing(RequestReservation requestReservationInfo) throws Exception {
        return TicketV3.builder()
            .performanceId(requestReservationInfo.getPerformanceId())
            .performanceName(requestReservationInfo.getPerformanceName())
            .round(requestReservationInfo.getRound())
            .line(requestReservationInfo.getLine())
            .seat(requestReservationInfo.getSeat())
            .fixedPrice(requestReservationInfo.getFixedPrice())
            .appliedDiscountPolicies(requestReservationInfo.getAppliedPolicies()
                .stream()
                .map(policyName -> getAppliedDiscountPolicy(requestReservationInfo.getPerformanceId(), requestReservationInfo.getFixedPrice(), policyName))
                .collect(Collectors.toSet())
            )
            .build();
    }

    private DiscountPolicy getAppliedDiscountPolicy(UUID performanceId, int fixedPrice, String policyName) {
        return discountPolicyFactory.create(performanceId, fixedPrice, policyName);
    }
}

package com.sprint.odigo.application.ticketing.v1;

import com.sprint.odigo.application.ticketing.v1.policy.NewMemberDiscountableTicketFeePolicy;
import com.sprint.odigo.application.ticketing.v1.policy.TelecomeDiscountableTicketFeePolicy;
import com.sprint.odigo.application.ticketing.v1.policy.TicketFeePolicy;
import com.sprint.odigo.domain.dto.PerformanceInfo;
import com.sprint.odigo.infrastructure.repository.PerformanceDiscountPolicyRepository;
import com.sprint.odigo.infrastructure.repository.PerformanceRepository;
import com.sprint.odigo.infrastructure.repository.ReservationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.List;

@Component
@RequiredArgsConstructor
public class Factory {
    private final PerformanceRepository performanceRepository;
    private final ReservationRepository reservationRepository;
    private final PerformanceDiscountPolicyRepository performanceDiscountPolicyRepository;

    public TicketSeller create(List<String> appliedPolicies, PerformanceInfo performanceInfo) {
        return new TicketSeller(performanceRepository, reservationRepository, (TicketFeePolicy) getAppliedPolicies(appliedPolicies, performanceInfo));
    }

    private TicketFeePolicy getAppliedPolicies(List<String> appliedPolicies, PerformanceInfo performanceInfo) {
        for (String policyName : appliedPolicies) {
            BigDecimal discountRate = performanceDiscountPolicyRepository.findByPerformanceIdAndName(performanceInfo.getPerformanceId(), policyName).getRate();
            int discountFee = performanceDiscountPolicyRepository.findByPerformanceIdAndName(performanceInfo.getPerformanceId(), policyName).getDiscountFee();
            switch (policyName) {
                case "telecom":
                    return new TelecomeDiscountableTicketFeePolicy(new HashSet<>(), discountRate);
                case "new_member":
                    return new NewMemberDiscountableTicketFeePolicy(new HashSet<>(), discountFee);
            }
        }
        return null;
    }


}

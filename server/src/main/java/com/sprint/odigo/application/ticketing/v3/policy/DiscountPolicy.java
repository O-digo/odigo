package com.sprint.odigo.application.ticketing.v3.policy;

@FunctionalInterface
public interface DiscountPolicy {
    int calculateDiscountFee();
}

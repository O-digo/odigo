package com.sprint.odigo.ticket.domain.dto;

import com.sprint.odigo.domain.dto.PerformanceType;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;


import java.util.Arrays;

@SpringBootTest
public class PerformanceEntityTests {

    @Test
    public void enumTest() {
        int code = 2;
        String typeName = Arrays.stream(PerformanceType.values()).filter(value -> value.getCategory() == code)
            .findFirst()
            .orElse(PerformanceType.NONE)
            .name();
        assertEquals("EXHIBITION", typeName);
    }
}

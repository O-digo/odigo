package com.sprint.odigo.domain.entity.station;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Station {
    private String stationCd;
    private String stationNm;
    private String lineNum;
    private String frCode;
}

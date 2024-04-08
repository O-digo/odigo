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
    private String STATION_CD;
    private String STATION_NM;
    private String STATION_NM_ENG;
    private String LINE_NUM;
    private String FR_CODE;
    private String STATION_NM_CHN;
    private String STATION_NM_JPN;
}

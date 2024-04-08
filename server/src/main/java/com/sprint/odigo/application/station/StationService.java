package com.sprint.odigo.application.station;

import com.google.gson.Gson;
import com.sprint.odigo.domain.dto.response.StationResponse;
import com.sprint.odigo.domain.entity.station.Station;
import com.sprint.odigo.infrastructure.mapper.StationMapper;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class StationService {
 private final StationMapper stationMapper;
private final Gson gson;

    public List<StationResponse> getStationList(String lineNum, String stationNm) throws Exception {
            return stationMapper.getStationListByLineNumOrStationNm(lineNum, stationNm);
    }
    public void insertStation(List<Station> stationList) throws Exception {
        stationMapper.insertStation(stationList);
    }
}

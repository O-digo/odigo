package com.sprint.odigo.infrastructure.mapper;

import com.sprint.odigo.domain.dto.response.StationResponse;
import com.sprint.odigo.domain.entity.station.Station;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface StationMapper {
    List<StationResponse> getStationListByLineNumOrStationNm(String lineNum, String stationNm);
    void insertStation(List<Station> list);
}

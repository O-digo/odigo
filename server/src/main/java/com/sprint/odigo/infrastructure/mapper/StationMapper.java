package com.sprint.odigo.infrastructure.mapper;

import com.sprint.odigo.domain.entity.station.Station;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface StationMapper {
    List<Station>getStationListByLineNum(String lineNum);
}

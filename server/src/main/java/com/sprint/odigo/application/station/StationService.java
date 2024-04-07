package com.sprint.odigo.application.station;

import com.sprint.odigo.domain.entity.station.Station;
import com.sprint.odigo.infrastructure.mapper.StationMapper;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class StationService {
 private final StationMapper stationMapper;

/*   public Station getStation(String stationNm) throws Exception {
      return repository.findByStationNm(stationNm);
   }*/
    public List<Station> getStationList(String lineNum) throws Exception {
       return stationMapper.getStationListByLineNum(lineNum);
    }
}

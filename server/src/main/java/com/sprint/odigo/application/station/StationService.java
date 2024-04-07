package com.sprint.odigo.application.station;

import com.sprint.odigo.domain.entity.station.Station;
import com.sprint.odigo.infrastructure.repository.StationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class StationService {
 private final StationRepository repository;

   public Station getStation(String stationNm) throws Exception {
      return repository.findByStationNm(stationNm);
   }
}

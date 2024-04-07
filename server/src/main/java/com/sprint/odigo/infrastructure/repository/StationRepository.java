package com.sprint.odigo.infrastructure.repository;

import com.sprint.odigo.domain.entity.station.Station;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface StationRepository extends JpaRepository<Station, UUID> {
    List<Station> findByStationCd(String stationCd);
    Station findByStationNm(String stationNm);
}
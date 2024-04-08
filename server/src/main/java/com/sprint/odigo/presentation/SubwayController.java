package com.sprint.odigo.presentation;

import com.sprint.odigo.application.common.SubwayService;
import com.sprint.odigo.application.station.StationService;
import com.sprint.odigo.domain.entity.station.Station;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class SubwayController {

    private final SubwayService subwayService;
    private final StationService stationService;

    @GetMapping("/subway/insert")
    public void getSubwayStations() throws Exception {
        List<Station> info = subwayService.getSubwayStations();
        stationService.insertStation(info);
    }
}


package com.sprint.odigo.presentation;

import com.sprint.odigo.application.station.StationService;
import com.sprint.odigo.core.domain.response.ResponseHandler;
import com.sprint.odigo.domain.dto.response.StationResponse;
import com.sprint.odigo.domain.entity.station.Station;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("station")
@RequiredArgsConstructor
public class StationController {
    private final StationService stationService;

    @GetMapping("/list")
    public ResponseEntity<?> getAllStation(@RequestParam(required = false) String lineNum, @RequestParam(required = false) String stationNm) throws Exception {
        return ResponseEntity
                .ok().body(ResponseHandler.<List<StationResponse>>builder()
                        .message("Success")
                        .statusCode(HttpStatus.OK)
                        .data(stationService.getStationList(lineNum, stationNm))
                        .build()
                );
    }
}

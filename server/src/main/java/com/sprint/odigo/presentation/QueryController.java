package com.sprint.odigo.presentation;

import com.sprint.odigo.application.station.StationService;
import com.sprint.odigo.core.domain.response.ResponseHandler;
import com.sprint.odigo.domain.entity.station.Station;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("query")
@RequiredArgsConstructor
public class QueryController {
    private final StationService stationService;

    @GetMapping("/station")
    public ResponseEntity<?> getAllStation() throws Exception {
        return ResponseEntity
                .ok().body(ResponseHandler.<Station>builder()
                        .message("Success")
                        .statusCode(HttpStatus.OK)
                        .data(stationService.getStation("인천역"))
                        .build()
                );
    }
}

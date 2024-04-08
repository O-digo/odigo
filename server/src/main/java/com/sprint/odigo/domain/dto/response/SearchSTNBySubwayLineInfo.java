package com.sprint.odigo.domain.dto.response;

import com.sprint.odigo.domain.entity.station.Station;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class SearchSTNBySubwayLineInfo {
     private Number list_total_count;
     private ResultCode RESULT;
     private List<Station> row;
}

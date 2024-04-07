package com.sprint.odigo.domain.entity.station;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLRestriction;

@Entity
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Station {
    @Id
    private String stationCd;
    private String stationNm;
    private String lineNum;
    private String frCode;
}

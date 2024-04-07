-- schema.sql
create TABLE IF NOT EXISTS station
(
    station_cd varchar(5)  not null
        primary key,
    station_nm varchar(30) not null comment '역 명',
    line_num   varchar(20) not null comment '호선명',
    fr_code    varchar(5)  not null
)
    comment '서울시 지하철 정보';


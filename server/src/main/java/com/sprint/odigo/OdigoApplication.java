package com.sprint.odigo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan
public class OdigoApplication {

    public static void main(String[] args) {
        SpringApplication.run(OdigoApplication.class, args);
    }

}

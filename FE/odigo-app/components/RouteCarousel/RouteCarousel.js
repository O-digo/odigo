import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { lineNumber } from '../Station/ArrivalStation.js';


export default function RouteCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const routeStations = [
        {station: '신도림', line: 'line02', move: 0},
        {station: '영등포', line: 'line01', move: 1},
        {station: '노량진', line: 'line09', move: 3},
        {station: '신논현', line: 'lineSbd', move: 3},
        {station: '양재', line: 'line03', move: 2},
        {station: '가락시장', line: 'line08', move: 8},
        {station: '잠실', line: 'line02', move: 5},
        {station: '건대입구', line: 'line07', move: 4},
        {station: '군자', line: 'line05', move: 2},
    ];
    const blockCnt = Math.floor(routeStations.length / 4);
    const carouselBlocks = [];
    for (let i=0; i<blockCnt; i++) {
        carouselBlocks[i] = routeStations.slice(i, i+4);
    }

    return (
        <Container>
            {carouselBlocks.map((block, blockIndex) =>
                <Block key={`block-${blockIndex}`}>
                    {block.map((route, routeIndex) =>
                        <StationList key={`station-${routeIndex}`}>
                            <StationWrap>
                                <StationImage source={lineNumber(route.line)}></StationImage>
                                <StationText>{route.station}</StationText>
                            </StationWrap>
                            <MoveText>{route.move}개 역</MoveText>
                        </StationList>
                    )}
                </Block>
            )}
            <CarouselIndicator>
                {carouselBlocks.length > 1 &&
                    carouselBlocks.map((_, indicatorIndex) => <Dot 
                        key={`indicator-${indicatorIndex}`}
                        active={`${ currentIndex === indicatorIndex ? 'active' : '' }`}
                    />)
                }
            </CarouselIndicator>
        </Container>
    )
}

const Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Block = styled.View`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    width: 321px;
    padding: 24px 20px;
    border: 2px solid #2C2C35;
    border-radius: 24px 20px;
`;

const StationList = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: darkgray;
`;

const StationWrap = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
`;

const StationImage = styled.Image`
    width: 32px;
    height: 32px;
`;

const MoveText = styled.Text`
    color: #7E7E87;
    font-size: 16px;
`;

const StationText = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding-left: 8px;
`;

const CarouselIndicator = styled.View`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 5px;
    margin: 10px auto;
`;

const Dot = styled.View`
    width: 7px;
    height: 7px;
    background-color: ${({active})=> active ? 'white' : 'gray'};
    border-radius: 50px;
`;
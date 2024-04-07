import React, { useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import styled from 'styled-components/native';
import { lineNumber } from '../Station/ArrivalStation.js';


export default function RouteCarousel() {
    const [currentPage, setCurrentPage] = useState(0);
    let screenWidth = Dimensions.get('window').width;
    const carouselBlocks = [
        [
            {station: '신도림', line: 'line02', move: 0},
            {station: '영등포', line: 'line01', move: 1},
            {station: '노량진', line: 'line09', move: 3},
            {station: '신논현', line: 'lineSb', move: 3}],
        [
            {station: '양재', line: 'line03', move: 2},
            {station: '가락시장', line: 'line08', move: 8},
            {station: '잠실', line: 'line02', move: 5},
            {station: '건대입구', line: 'line07', move: 4}],
        [
            {station: '군자', line: 'line05', move: 2},
            {station: '잠실', line: 'line02', move: 5},
            {station: '건대입구', line: 'line07', move: 4}],
        [
            {station: '양재', line: 'line03', move: 2},
            {station: '가락시장', line: 'line08', move: 8}],
        [
            {station: '양재', line: 'line03', move: 2},
            {station: '가락시장', line: 'line08', move: 8},
            {station: '잠실', line: 'line02', move: 5},
            {station: '건대입구', line: 'line07', move: 4}],
    ];

    const handleScroll = (event) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const page = Math.ceil(offsetX / (screenWidth));
        setCurrentPage(page);
    }

    return (
        <Container>
            <Carousel 
                horizontal
                // pagingEnabled
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.ScrollView}
                onScroll={handleScroll}
            >
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
            </Carousel>
            <CarouselIndicator>
                    {carouselBlocks.length > 1 &&
                        carouselBlocks.map((_, indicatorIndex) => <Dot 
                            key={`indicator-${indicatorIndex}`}
                            active={`${ currentPage === indicatorIndex ? 'active' : '' }`}
                        />)
                    }
            </CarouselIndicator>
        </Container>
    )
}

const styles = StyleSheet.create({
    screenView: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
})

const Container = styled.View``;

const Carousel = styled.ScrollView`
    display: flex;
    flex-direction: row;
`;

const Block = styled.View`
    width: 340px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px 20px;
    border: 2px solid #2C2C35;
    border-radius: 24px 20px;
    margin-left: 8px;
`;

const StationList = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const StationWrap = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
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
    font-size: 18px;
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
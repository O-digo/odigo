import React from 'react';
import styled from 'styled-components/native';
import TrainItem from './TrainItem';

function TrainList() {
  const trainList = [
    { id: 1, name: '1호선' },
    { id: 2, name: '2호선' },
    { id: 3, name: '3호선' },
    { id: 4, name: '4호선' },
    { id: 5, name: '5호선' },
    { id: 6, name: '6호선' },
    { id: 7, name: '7호선' },
    { id: 8, name: '8호선' },
    { id: 9, name: '9호선' },
    { id: 10, name: '인천2호선' },
    { id: 11, name: '경간선' },
    { id: 12, name: '경의중앙선' },
    { id: 13, name: '경춘선' },
    { id: 14, name: '공항철도' },
    { id: 15, name: '경춘선' },
    { id: 16, name: '경춘선' },
    { id: 17, name: '경춘선' },
    { id: 18, name: '경춘선' },
    { id: 19, name: '경춘선' },
    { id: 20, name: '경춘선' },
  ];

  return (
    <TrainScrollView>
      <TrainItemsContainer>
        {trainList.map((item) => (
          <TrainItem key={item.id} name={item.name} />
        ))}
      </TrainItemsContainer>
    </TrainScrollView>
  );
}

const TrainScrollView = styled.ScrollView`
  flex: 1;
`;

const TrainItemsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default TrainList;

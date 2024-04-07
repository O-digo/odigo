import React from 'react';
import styled from 'styled-components/native';
import TrainItem from './TrainItem';

function TrainList({ navigation }) {
  const trainList = [
    { id: 1, name: '1호선', line: 'line1' },
    { id: 2, name: '2호선', line: 'line2' },
    { id: 3, name: '3호선', line: 'line3' },
    { id: 4, name: '4호선', line: 'line4' },
    { id: 5, name: '5호선', line: 'line5' },
    { id: 6, name: '6호선', line: 'line6' },
    { id: 7, name: '7호선', line: 'line7' },
    { id: 8, name: '8호선', line: 'line8' },
    { id: 9, name: '9호선', line: 'line9' },
    { id: 10, name: '인천1호선', line: 'lineic1' },
    { id: 11, name: '인천2호선', line: 'lineic2' },
    { id: 12, name: '경강선', line: 'linekk' },
    { id: 13, name: '경의중앙선', line: 'linekj' },
    { id: 14, name: '경춘선', line: 'linekc' },
    { id: 15, name: '공항철도', line: 'linearex' },
    { id: 16, name: '경춘선', line: 'linekc' },
    { id: 17, name: '경춘선', line: 'linekc' },
    { id: 18, name: '경춘선', line: 'linekc' },
    { id: 19, name: '경춘선', line: 'linekc' },
    { id: 20, name: '경춘선', line: 'linekc' },
    { id: 21, name: '경춘선', line: 'linekc' },
  ];

  return (
    <TrainScrollView>
      <TrainItemsContainer>
        {trainList.map((item) => (
          <TrainItem
            key={item.id}
            name={item.name}
            line={item.line}
            navigation={navigation}
          />
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

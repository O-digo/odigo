import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import TrainItem from './TrainItem';

function TrainList({ navigation }) {
  const trainList = [
    { id: 1, name: '1호선', line: '01호선' },
    { id: 2, name: '2호선', line: '02호선' },
    { id: 3, name: '3호선', line: '03호선' },
    { id: 4, name: '4호선', line: '04호선' },
    { id: 5, name: '5호선', line: '05호선' },
    { id: 6, name: '6호선', line: '06호선' },
    { id: 7, name: '7호선', line: '07호선' },
    { id: 8, name: '8호선', line: '08호선' },
    { id: 9, name: '9호선', line: '09호선' },
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

  const renderItem = ({ item }) => (
    <TrainItem name={item.name} line={item.line} navigation={navigation} />
  );

  return (
    <TrainFlatList
      data={trainList}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
    />
  );
}

const TrainFlatList = styled.FlatList`
  width: 100%;
  height: 100%;
`;

export default TrainList;

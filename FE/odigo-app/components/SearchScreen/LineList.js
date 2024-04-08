import React from 'react';
import styled from 'styled-components/native';
import LineItem from './LineItem';
import SearchStore from '../../store/SearchStore';

function LineList({ line }) {
  const { lineList } = SearchStore();
  return (
    <LineScrollView vertical={true} showsVerticalScrollIndicator={false}>
      <LineListBox>
        {lineList.map((item) => (
          <LineItem key={item.id} name={item.stationNm} line={item.lineNum} />
        ))}
      </LineListBox>
    </LineScrollView>
  );
}

const LineScrollView = styled.ScrollView`
  flex: 1;
`;

const LineListBox = styled.View`
  padding: 0 24px;
  padding-top: 32px;
`;

export default LineList;

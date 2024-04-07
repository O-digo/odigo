import React from 'react';
import styled from 'styled-components/native';
import LineItem from './LineItem';

function LineList({ line }) {
  const lineList = [
    { id: 1, name: '가능' },
    { id: 2, name: '가산디지털단지' },
    { id: 3, name: '간석' },
    { id: 4, name: '개봉' },
    { id: 5, name: '관악' },
    { id: 6, name: '광명' },
    { id: 7, name: '광명' },
  ];

  return (
    <LineScrollView vertical={true} showsVerticalScrollIndicator={false}>
      <LineListBox>
        {lineList.map((item) => (
          <LineItem key={item.id} name={item.name} line={line} />
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

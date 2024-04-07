import React from 'react';
import styled from 'styled-components/native';
import FavoriteLine from './FavoriteLine';

function LineList({ lineList }) {
  return (
    <LineScrollView>
      <LineListBox>
        {lineList.map((item) => (
          <FavoriteLine key={item.id} name={item.name} line={item.line} />
        ))}
      </LineListBox>
    </LineScrollView>
  );
}

const LineScrollView = styled.View`
  height: auto;
  margin-bottom: 24px;
`;

const LineListBox = styled.View`
  padding: 0 24px;
  padding-top: 32px;
`;

export default LineList;

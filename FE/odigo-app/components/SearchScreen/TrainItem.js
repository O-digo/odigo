import React from 'react';
import styled from 'styled-components/native';

function TrainItem({ name }) {
  return (
    <TrainItemBox>
      <TrainTitle>{name}</TrainTitle>
    </TrainItemBox>
  );
}

const TrainItemBox = styled.View`
  width: 109px;
  height: 88px;
  margin-right: 9px;
  margin-bottom: 9px;
  border-radius: 8px;
  background-color: rgb(44, 44, 53);
`;

const TrainTitle = styled.Text`
  height: 17px;
  font-size: 14px;
  color: rgb(255, 255, 255);
`;

export default TrainItem;

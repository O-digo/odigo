import React from 'react';
import styled from 'styled-components/native';
import TrainList from './TrainList';

function Train({ navigation }) {
  return (
    <TrainBox>
      <TrainList navigation={navigation} />
    </TrainBox>
  );
}

const TrainBox = styled.View`
  flex: 1;
  margin-top: 32px;
  padding: 32px 24px 0px 24px;
`;

export default Train;

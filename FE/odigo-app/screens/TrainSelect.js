import React from 'react';
import styled from 'styled-components/native';
import Line from '../components/SearchScreen/Line';

function TrainSelect({ route, navigation }) {
  return (
    <StyledView>
      <Line name={route.params.name} line={route.params.line} navigation={navigation} />
    </StyledView>
  );
}

const StyledView = styled.View`
  height: 100%;
`;

export default TrainSelect;

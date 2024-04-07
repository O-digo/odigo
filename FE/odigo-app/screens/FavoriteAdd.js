import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import SeachBar from '../components/SearchScreen/SearchBar';
import Train from '../components/SearchScreen/Train';

export default function FavoriteAdd({ navigation }) {
  return (
    <StyledView>
      <SeachBar />
      <Train navigation={navigation} />
    </StyledView>
  );
}

const StyledView = styled.View`
  height: 100%;
`;

const StyledText = styled.Text`
  color: white;
  font-size: 20px;
`;

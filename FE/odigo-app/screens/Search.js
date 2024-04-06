import React from 'react';
import styled from 'styled-components/native';
import SearchBar from '../components/SearchScreen/SearchBar';
import Favorite from '../components/SearchScreen/Favorite';
import Train from '../components/SearchScreen/Train';

function Screen2({ navigation }) {
  return (
    <StyledView>
      <SearchBar />
      <Favorite />
      <Train />
    </StyledView>
  );
}

const StyledView = styled.View`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: black;
`;

export default Screen2;

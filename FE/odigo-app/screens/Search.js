import React from 'react';
import styled from 'styled-components/native';
import SeachBar from '../components/SearchScreen/SearchBar';
import Favorite from '../components/SearchScreen/Favorite';
import Train from '../components/SearchScreen/Train';

function Search({ navigation }) {
  return (
    <StyledView>
      <SeachBar />
      <Favorite navigation={navigation} />
      <Train navigation={navigation} />
    </StyledView>
  );
}

const StyledView = styled.View`
  height: 100%;
`;

export default Search;

import React, { useState } from 'react';
import styled from 'styled-components/native';
import SeachBar from '../components/SearchScreen/SearchBar';
import Favorite from '../components/SearchScreen/Favorite';
import Train from '../components/SearchScreen/Train';
import LineList from '../components/SearchScreen/LineList';

function Search({ navigation }) {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <StyledView>
      <SeachBar onSearch={setSearchResults} />
      {searchResults ? (
        <>
          <LineList line={'line1'} />
        </>
      ) : (
        <>
          <Favorite navigation={navigation} />
          <Train navigation={navigation} />
        </>
      )}
    </StyledView>
  );
}

const StyledView = styled.View`
  height: 100%;
`;

export default Search;

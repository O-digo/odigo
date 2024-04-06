import React from 'react';
import styled from 'styled-components/native';
import SearchIcon from '../../assets/img/icon_search.png';

function SeachBar() {
  return (
    <SearchBox>
      <SearchImg source={SearchIcon} />
      <SearchInput placeholder="역 이름을 검색해주세요." placeholderTextColor="#828282" />
    </SearchBox>
  );
}

const SearchBox = styled.View`
  display: flex;
  flex-direction: row;
  background-color: rgb(32, 32, 39);
  margin: 12px 20px 12px 20px;
  height: 48px;
  border-radius: 44px;
`;

const SearchInput = styled.TextInput`
  width: 100%;
  padding: 14.5px 24px 14.5px 8px;
  color: rgb(130, 130, 130);
`;

const SearchImg = styled.Image`
  margin: 14.5px 0px 14.5px 24px;
`;

export default SeachBar;

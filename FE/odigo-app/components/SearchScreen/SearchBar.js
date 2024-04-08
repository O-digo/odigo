import React, { useState } from 'react';
import styled from 'styled-components/native';
import SearchIcon from '../../assets/img/icon_search.png';
import SearchClose from '../../assets/img/icon_search_close.png';
import SearchStore from '../../store/SearchStore';

function SeachBar() {
  const { searchKeyword, setSearchKeyword, clearSearchKeyword } = SearchStore();
  return (
    <SearchBox>
      <LeftBox>
        <SearchImg source={SearchIcon} />
        <SearchInput
          value={searchKeyword}
          placeholder="역 이름을 검색해주세요."
          placeholderTextColor="#828282"
          onChangeText={setSearchKeyword}
        />
      </LeftBox>
      {searchKeyword ? (
        <SearchCloseButton onPress={clearSearchKeyword}>
          <SearchCloseImg source={SearchClose} />
        </SearchCloseButton>
      ) : null}
    </SearchBox>
  );
}

const SearchBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgb(32, 32, 39);
  margin: 12px 20px 12px 20px;
  height: 48px;
  border-radius: 44px;
  align-items: center;
`;

const LeftBox = styled.View`
  display: flex;
  flex-direction: row;
`;

const SearchInput = styled.TextInput`
  width: 80%;
  padding: 14.5px 24px 14.5px 8px;
  color: rgb(130, 130, 130);
`;

const SearchImg = styled.Image`
  margin: 14.5px 0px 14.5px 24px;
`;

const SearchCloseButton = styled.TouchableOpacity`
  margin-right: 25px;
`;

const SearchCloseImg = styled.Image`
  width: 20px;
  height: 20px;
`;

export default SeachBar;

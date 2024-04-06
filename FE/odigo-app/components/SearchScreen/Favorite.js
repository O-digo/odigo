import React from 'react';
import styled from 'styled-components/native';
import FavoriteList from './FavoriteList';

function Favorite() {
  return (
    <FavoriteBox>
      <FavoriteTitle>자주가는 역</FavoriteTitle>
      <FavoriteList />
    </FavoriteBox>
  );
}

const FavoriteBox = styled.View`
  height: 48px;
  margin-top: 8px;
  padding: 12px 24px 12px 24px;
`;

const FavoriteTitle = styled.Text`
  color: rgb(204, 204, 204);
  font-size: 16px;
`;

export default Favorite;

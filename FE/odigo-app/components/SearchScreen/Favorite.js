import React from 'react';
import styled from 'styled-components/native';
import FavoriteList from './FavoriteList';
import imgFavorite from '../../assets/img/icon_favorite.png';
import imgArrow from '../../assets/img/icon_arrow.png';

function Favorite() {
  return (
    <FavoriteBox>
      <FavoriteTitleBox>
        <LeftBox>
          <FavoriteImg source={imgFavorite} />
          <FavoriteTitle>자주가는 역</FavoriteTitle>
        </LeftBox>
        <ArrowImg source={imgArrow} />
      </FavoriteTitleBox>
      <FavoriteList />
    </FavoriteBox>
  );
}

const FavoriteBox = styled.View`
  width: 100%;
`;

const LeftBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ArrowImg = styled.Image`
  width: 16px;
  height: 16px;
`;

const FavoriteTitleBox = styled.View`
  display: flex;
  flex-direction: row;
  height: 48px;
  margin-top: 8px;
  padding: 12px 24px 12px 24px;
  align-items: center;
  justify-content: space-between;
`;

const FavoriteImg = styled.Image`
  width: 16px;
  height: 16px;
`;

const FavoriteTitle = styled.Text`
  color: rgb(204, 204, 204);
  font-size: 16px;
  margin-left: 6px;
`;

export default Favorite;

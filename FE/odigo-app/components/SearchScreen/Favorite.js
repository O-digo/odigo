import React, { useState } from 'react';
import styled from 'styled-components/native';
import FavoriteList from './FavoriteList';
import imgFavorite from '../../assets/img/icon_favorite.png';
import imgArrow from '../../assets/img/icon_arrow.png';
import AddFavorite from '../Station/AddFavorite';

function Favorite({ navigation }) {
  const [fav, setFav] = useState([]);

  const onPressButton = () => {
    navigation.navigate('FavoriteEdit');
  };

  const onPressFavoritePlus = () => {
    setFav(favoriteItems);
  };

  const favoriteItems = [
    {
      id: 1,
      name: '강남역',
    },
    {
      id: 2,
      name: '잠실역',
    },
    {
      id: 3,
      name: '영등포역',
    },
    {
      id: 4,
      name: '구로역',
    },
    {
      id: 5,
      name: '구로역',
    },
  ];

  return (
    <FavoriteBox>
      <FavoriteTitleBox>
        <LeftBox>
          <FavoriteImg source={imgFavorite} />
          <FavoriteTitle>자주가는 역</FavoriteTitle>
        </LeftBox>
        <ArrowButton onPress={onPressButton}>
          <ArrowImg source={imgArrow} />
        </ArrowButton>
      </FavoriteTitleBox>
      {fav.length ? (
        <FavoriteList favoriteItems={fav} />
      ) : (
        <AddFavorite onPress={onPressFavoritePlus} />
      )}
    </FavoriteBox>
  );
}

const FavoriteBox = styled.View`
  width: 100%;
`;

const ArrowButton = styled.TouchableOpacity``;

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

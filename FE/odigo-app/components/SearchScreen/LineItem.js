import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { iconPath } from '../../iconPath';
import imgFavorite from '../../assets/img/icon_blank_favorite.png';

function LineItem({ name, line }) {
  return (
    <LineItemBox>
      <LeftBox>
        <LineImg source={iconPath[line]} />
        <LineButton>
          <ButtonText>{name}</ButtonText>
        </LineButton>
      </LeftBox>
      <FavoriteImg source={imgFavorite} />
    </LineItemBox>
  );
}

const LineItemBox = styled.View`
  width: 100%;
  height: 80px;
  border-radius: 24px;
  background-color: rgb(44, 44, 53);
  margin-bottom: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FavoriteImg = styled.Image`
  width: 32px;
  height: 32px;
  margin-right: 24px;
`;

const LeftBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 24px;
`;

const LineImg = styled.Image`
  width: 32px;
  height: 32px;
`;

const LineButton = styled(TouchableOpacity)`
  margin-left: 8px;
`;

const ButtonText = styled.Text`
  color: rgb(228, 228, 229);
  font-size: 20px;
  font-weight: bold;
`;

export default LineItem;

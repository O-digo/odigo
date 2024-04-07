import React, { useState } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';
import { iconPath } from '../../iconPath';
import imgDelte from '../../assets/img/icon_delete.png';
import useStore from '../../store/Favorite';

function FavoriteLine({ name, line }) {
  const { removeFavoriteLine } = useStore();
  const onPressDelete = () => {
    Alert.alert(
      '자주 가는 역에서 삭제할까요?',
      '',
      [
        {
          text: '취소',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: '확인', onPress: () => handleDelete() },
      ],
      { cancelable: false }
    );
  };
  const handleDelete = () => {
    removeFavoriteLine(name);
  };
  return (
    <LineItemBox>
      <LeftBox>
        <LineImg source={iconPath[line]} />
        <LineButton>
          <ButtonText>{name}</ButtonText>
        </LineButton>
      </LeftBox>
      <FavoriteButton onPress={onPressDelete}>
        <FavoriteImg source={imgDelte} />
      </FavoriteButton>
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

const FavoriteButton = styled.TouchableOpacity``;

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

export default FavoriteLine;

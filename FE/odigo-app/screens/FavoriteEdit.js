import React, { useState } from 'react';
import styled from 'styled-components';
import FavoriteLineList from '../components/SettingScreen/FavoriteLineList';
import useStore from '../store/Favorite';

export default function FavoriteSetting({ navigation }) {
  const { favoriteLineList } = useStore();
  const onPressButton = () => {
    navigation.navigate('FavoriteAdd');
  };
  return (
    <StyledView>
      {favoriteLineList.length === 0 ? (
        <TitleContainer>
          <StyledText>자주 가는 역이 없어요.</StyledText>
          <StyledButton onPress={onPressButton}>
            <PlusText>+&nbsp;&nbsp;추가하기</PlusText>
          </StyledButton>
        </TitleContainer>
      ) : (
        <>
          <FavoriteNotion>최대 5개까지 등록 가능해요.</FavoriteNotion>
          <FavoriteLineList lineList={favoriteLineList} />
        </>
      )}
      {favoriteLineList.length < 5 && favoriteLineList.length !== 0 && (
        <Container>
          <StyledButton onPress={onPressButton}>
            <PlusText>+&nbsp;&nbsp;추가하기</PlusText>
          </StyledButton>
        </Container>
      )}
    </StyledView>
  );
}

const StyledView = styled.View`
  height: 100%;
  display: flex;
  background-color: black;
`;

const TitleContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.TouchableOpacity`
  width: 117px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid rgb(126, 126, 135);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlusText = styled.Text`
  color: white;
  font-size: 14px;
`;

const StyledText = styled.Text`
  color: white;
  font-size: 16px;
  color: rgb(126, 126, 135);
  margin-bottom: 16px;
`;

const FavoriteNotion = styled.Text`
  font-size: 16px;
  height: 19px;
  color: rgb(255, 255, 255);
  margin-top: 24px;
  text-align: center;
`;

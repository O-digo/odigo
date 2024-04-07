import React from 'react';
import styled from 'styled-components/native';
import imgArrow from '../assets/img/icon_arrow.png';
import { Alert } from 'react-native';

export default function Setting({ navigation }) {
  const onPressReady = () => {
    Alert.alert('준비중입니다.');
  };

  return (
    <StyledView>
      <StyledButton onPress={() => navigation.navigate('AlertSetting')}>
        <StyledText>알림</StyledText>
        <ArrowImg source={imgArrow} />
      </StyledButton>
      <StyledButton onPress={onPressReady}>
        <StyledText>자주 가는 역 관리</StyledText>
        <ArrowImg source={imgArrow} />
      </StyledButton>
      <StyledButton onPress={onPressReady}>
        <StyledText>지하철 운행 현황</StyledText>
        <ArrowImg source={imgArrow} />
      </StyledButton>
      <StyledButton onPress={onPressReady}>
        <StyledText>도움말</StyledText>
        <ArrowImg source={imgArrow} />
      </StyledButton>
    </StyledView>
  );
}

const StyledView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  margin-top: 24px;
`;

const StyledText = styled.Text`
  color: white;
  font-size: 20px;
`;

const StyledButton = styled.TouchableOpacity`
  width: 100%;
  padding: 0 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 56px;
`;

const ArrowImg = styled.Image`
  width: 20px;
  height: 20px;
`;

import React, { useState } from 'react';
import { Alert, View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

function Screen1({ navigation }) {
  const [currentStation, setCurrentStation] = useState({ station: '영등포', no: 1 });

  const onPressButton = () => {
    Alert.alert('준비중입니다.');
  };

  return (
    <StyledView>
      <StyledTitle>이번 역</StyledTitle>
      <Button title="영등포" onPress={onPressButton} />
      <StyledTitle>목적 역</StyledTitle>
      <Button title="선택하기" onPress={() => navigation.navigate('Search')} />
      <Text>자주 가는 역</Text>
      <Button title="추가하기 +" onPress={onPressButton} />
      <Button title="시작하기" onPress={onPressButton} />
    </StyledView>
  );
}

const StyledView = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: black;
`;

const StyledTitle = styled.Text`
  font-size: 20px;
  color: white;
`;

export default Screen1;

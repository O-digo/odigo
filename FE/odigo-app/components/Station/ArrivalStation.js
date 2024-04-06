import React from 'react';
import styled from 'styled-components/native';

export default function ArrivalStation({onPress}) {
  return (
    <Container onPress={onPress} underlayColor='#fff'>
      <DestinationText>선택하기</DestinationText>
    </Container>
  )
}

const Container = styled.TouchableOpacity`
    height: 80px;
    margin: 0 24px;
    padding: 24px;
    font-size: 20px;
    background-color: rgb(44, 44, 54);
    border: 2px solid rgb(49, 130, 246);
    border-radius: 24px;
`;

const DestinationText = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding-left: 8px;
    text-align: center;
`;
import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

export default function FavoriteSetting({navigation}) {
    return (
        <StyledView>
            <StyledText>FavoriteSetting 스크린 입니다.</StyledText>
            <StyledButton onPress={() => navigation.navigate('FavoriteAdd')}>
                <StyledText>자주 가는 역 추가하기로 이동</StyledText>
            </StyledButton>
        </StyledView>
    )
}

const StyledView = styled.View`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
`;

const StyledButton = styled.TouchableOpacity`
    padding: 15px 15px;
    margin-top: 50px;
    background-color: blueviolet;
    border-radius: 50px;
`;

const StyledText = styled.Text`
    color: white;
    font-size: 20px;
`;
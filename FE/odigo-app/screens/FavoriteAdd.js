import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

export default function FavoriteAdd() {
    return (
        <StyledView>
            <StyledText>FavoriteAdd 스크린 입니다.</StyledText>
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

const StyledText = styled.Text`
    color: white;
    font-size: 20px;
`;
import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

export default function AlertSetting() {
    return (
        <StyledView>
            <StyledText>AlertSetting 스크린 입니다.</StyledText>
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
`;
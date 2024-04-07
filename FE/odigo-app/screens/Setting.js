import React from 'react';
import styled from 'styled-components/native';

export default function Setting({navigation}) {
    return (
        <StyledView>
            <StyledText>Setting 스크린 입니다.</StyledText>
            <StyledButton onPress={() => navigation.navigate('AlertSetting')}>
                <StyledText>알림 설정으로 이동</StyledText>
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

const StyledText = styled.Text`
    color: white;
    font-size: 20px;
`;

const StyledButton = styled.TouchableOpacity`
    padding: 15px 15px;
    margin-top: 50px;
    background-color: blueviolet;
    border-radius: 50px;
`;
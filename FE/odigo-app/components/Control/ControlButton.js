import React from 'react';
import styled from 'styled-components/native';

export default function ControlButton({onPress}) {
    return (
        <Container onPress={onPress} underlayColor='#fff' >
            <ControlButtonText>시작하기</ControlButtonText>
        </Container>
    )
}

const Container = styled.TouchableOpacity`
    margin: 16px 20px;
    background-color: rgb(44, 44, 54);
    /* border: 2px solid rgb(49, 130, 246); */
    border-radius: 16px;
    position: fixed;
    bottom: 0px;
`;

const ControlButtonText = styled.Text`
    color: #7E7E87;
    font-size: 18px;
    margin: 21.5px 14.5px;
    text-align: center;
`;
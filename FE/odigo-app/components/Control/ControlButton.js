import React from 'react';
import styled from 'styled-components/native';

export default function ControlButton({onPress, mode}) {
    let disalbed = (mode === 'disable' ? true : false);

    return (
        <Container onPress={onPress} underlayColor='#fff' mode={mode} disabled={disalbed}>
            <ControlButtonText mode={mode}>{mode !== 'quit' ? '시작하기' : '종료하기'}</ControlButtonText>
        </Container>
    )
}

const Container = styled.TouchableOpacity`
    margin: 16px 20px;
    background-color: ${({mode}) => mode === 'disable' ? '#202027' : mode === 'start' ? '#3182F6' : '#F83242'};
    /* border: 2px solid rgb(49, 130, 246); */
    border-radius: 16px;
    position: fixed;
    bottom: 0px;
`;

const ControlButtonText = styled.Text`
    color: ${({mode})=> mode === 'disable' ? '#7E7E87' : '#FFFFFF' };
    font-size: 18px;
    margin: 21.5px 14.5px;
    text-align: center;
`;
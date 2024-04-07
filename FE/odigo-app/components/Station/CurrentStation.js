import React, { useState } from 'react';
import imgStation1 from '../../assets/img/Frame_15.png';
import styled from 'styled-components/native';

export default function CurrentStation({onPress}) {
    const [CurrentStation, setCurrentStation] = useState("영등포");

    return (
        <Container onPress={onPress} underlayColor='#fff'>
            <StationImage source={imgStation1}></StationImage>
            <CurrentText>{CurrentStation}</CurrentText>
        </Container>
    )
}

const Container = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 80px;
    margin: 0 24px 24px 24px;
    padding: 24px;
    font-size: 20px;
    background-color: rgb(44, 44, 54);
    /* border: 2px solid rgb(49, 130, 246); */
    border-radius: 24px;
`;

const StationImage = styled.Image`
    width: 32px;
    height: 32px;
`;

const CurrentText = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding-left: 8px;
`;
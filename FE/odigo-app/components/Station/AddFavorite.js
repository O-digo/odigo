import React from 'react';
import styled from 'styled-components/native';

export default function AddFavorite({onPress}) {
    return (
        <Container onPress={onPress} underlayColor='#fff' >
            <AddFavoriteText>+ 추가하기</AddFavoriteText>
        </Container>
    )
}

const Container = styled.TouchableOpacity`
    height: 40px;
    width: 117px;
    margin: 0 auto;
    background-color: none;
    border: 1px solid #7E7E87;
    border-radius: 20px;
`;

const AddFavoriteText = styled.Text`
    color: white;
    font-size: 14px;
    margin: auto auto;
    text-align: center;
`;
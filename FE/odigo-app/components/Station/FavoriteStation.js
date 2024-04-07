import React from 'react';
import styled from 'styled-components/native';
import imgFavorite from '../../assets/img/icon_favorite.png';
import imgArrow from '../../assets/img/icon_arrow.png';

export default function FavoriteStation({onPress}) {
    return (
        <Container>
            <Wrap>
                <FavoriteImage source={imgFavorite}></FavoriteImage>
                <FavoriteText>자주 가는 역</FavoriteText>
            </Wrap>
            <ArrowButton onPress={onPress}>
                <ArrowImage source={imgArrow}></ArrowImage>
            </ArrowButton>
        </Container>
    )
}

const Container = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 24px;
    margin-bottom: 8px;
    `;

const Wrap = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const FavoriteText = styled.Text`
    color: white;
    font-size: 16px;
    margin-left: 6px;
`;

const FavoriteImage = styled.Image`
    width: 16px;
    height: 16px;
`;

const ArrowButton = styled.TouchableOpacity`
    padding: 16px 24px;
`;

const ArrowImage = styled.Image`
    width: 16px;
    height: 16px;
`;
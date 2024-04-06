import React, { useState } from 'react';
import { useWindowDimensions, Alert, View, Text, Button, Image } from 'react-native';
import styled from 'styled-components/native';
import imgStation1 from '../assets/img/Frame_15.png';
import imgSetting from '../assets/img/icon_setting.png';
import imgFavorite from '../assets/img/icon_favorite.png';
import imgArrow from '../assets/img/icon_arrow.png';
import { TouchableOpacity } from 'react-native-gesture-handler';


function Main({ navigation }) {
    const { width, height } = useWindowDimensions();
    const [CurrentStation, setCurrentStation] = useState("영등포");
    const onAlert = () => {
        Alert.alert("준비중입니다.");
    }
    const goSearch = () => {
        navigation.navigate('Search')
    }

    return (
    <Container width={width} height={height}>
        <StationWrap>
            <Header width={width}>
                <SettingButton onPress={onAlert}>
                    <SettingImage source={imgSetting}></SettingImage>
                </SettingButton>
            </Header>

            <StationTitle>이번 역</StationTitle>
            <CurrentButton onPress={goSearch} underlayColor='#fff'>
                <StationImage source={imgStation1}></StationImage>
                <CurrentText>{CurrentStation}</CurrentText>
            </CurrentButton>
            <StationTitle>목적 역</StationTitle>

            <DestinationButton onPress={goSearch} underlayColor='#fff'>
                <DestinationText>선택하기</DestinationText>
            </DestinationButton>

            <FavoriteWrap>
                    <Wrap>
                        <FavoriteImage source={imgFavorite}></FavoriteImage>
                        <FavoriteText>자주 가는 역</FavoriteText>
                    </Wrap>
                    <ArrowButton onPress={onAlert}>
                        <ArrowImage source={imgArrow}></ArrowImage>
                    </ArrowButton>
            </FavoriteWrap>

            <AddFavorite onPress={onAlert} underlayColor='#fff' >
                <AddFavoriteText>+ 추가하기</AddFavoriteText>
            </AddFavorite>
        </StationWrap>
            
        <ControlButton onPress={onAlert} underlayColor='#fff' >
            <ControlButtonText>시작하기</ControlButtonText>
        </ControlButton>
    </Container>
    );
}

const Container = styled.View`
    display: flex;
    width: ${({width})=> width}px;
    height: ${({height})=> height - 56}px;
    flex-direction: column;
    justify-content: space-between;
    background-color: black;
`;

const StationWrap = styled.View``;

const Header = styled.View`
    display: flex;
    width: ${({width})=> width}px;
    justify-content: center;
    align-items: flex-end;
`;

const SettingButton = styled.TouchableOpacity`
    padding: 17px 21.7px;
`;

const SettingImage = styled.Image`
    width: 24px;
    height: 24px;
`;

const StationTitle = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 24px;
`;

const CurrentButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 80px;
    margin: 0 24px;
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

const DestinationButton = styled.TouchableOpacity`
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

const FavoriteWrap = styled.View`
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

const AddFavorite = styled.TouchableOpacity`
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

const ControlButton = styled.TouchableOpacity`
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

export default Main;
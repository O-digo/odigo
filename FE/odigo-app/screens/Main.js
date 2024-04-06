import React, {useState} from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import Header from '../components/Header/Header.js';
import CurrentStation from '../components/Station/CurrentStation.js';
import ArrivalStation from '../components/Station/ArrivalStation.js';
import FavoriteStation from '../components/Station/FavoriteStation.js';
import AddFavorite from '../components/Station/AddFavorite.js';
import ControlButton from '../components/Control/ControlButton.js';
import FavoriteList from '../components/SearchScreen/FavoriteList';

function Main({ navigation }) {
    const favoriteItems = [
        { id: 1, name: '강남역' },
        { id: 2, name: '잠실역' },
        { id: 3, name: '영등포역' },
        { id: 4, name: '구로역' },
        { id: 5, name: '구로역' },
    ];
    const [favorite, setFavorite] = useState([]);
    const [ControlMode, setControlMode] = useState('disable'); // 'start', 'quit'
    
    const onAlert = () => {
        Alert.alert("준비중입니다.");
        if (ControlMode === 'disable') setControlMode('start');
        else if (ControlMode === 'start') setControlMode('quit');
        else setControlMode('disable');
    }
    const goSearchCurrent = () => {
        navigation.navigate('Search');
    }
    const goSearchArrival = () => {
        navigation.navigate('Search');
        setTimeout(() => {
            setControlMode('start');
        }, 500);
    }
    const goSetting = () => {
        navigation.navigate('Setting');
    }
    const goFavoriteEdit = () => {
        navigation.navigate('FavoriteEdit');
    }
    const goFavoriteAdd = () => {
        // navigation.navigate('FavoriteAdd');
        setFavorite(favoriteItems);
    }

    return (
    <Container>
        <StationWrap>
            <Header onPress={goSetting}/>
            <StationTitle>이번 역</StationTitle>
            <CurrentStation onPress={goSearchCurrent} />
            <StationTitle>도착 역</StationTitle>
            <ArrivalStation onPress={goSearchArrival} />
            <FavoriteStation onPress={goFavoriteEdit} />
            {
                // favoriteItems.length 
                favorite.length
                    ? <FavoriteList />
                    // :<AddFavorite onPress={goFavoriteAdd} />
                    :<AddFavorite onPress={goFavoriteAdd} />
            }
        </StationWrap>
        <ControlButton onPress={onAlert} mode={ControlMode} />
    </Container>
    );
}

const Container = styled.View`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    background-color: black;
`;

const StationWrap = styled.View``;

const StationTitle = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 24px;
`;

export default Main;
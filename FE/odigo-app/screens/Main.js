import React, {useState} from 'react';
import { Alert, View } from 'react-native';
import styled from 'styled-components/native';
import Header from '../components/Header/Header.js';
import CurrentStation from '../components/Station/CurrentStation.js';
import ArrivalStation from '../components/Station/ArrivalStation.js';
import ControlButton from '../components/Control/ControlButton.js';
import RouteCarousel from '../components/RouteCarousel/RouteCarousel.js';
import FavoriteMain from '../components/Station/FavoriteMain.js';


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
    const [selectedArrival, setSelectedArrival] = useState({station:'', line: []});
    const [isRoute, setIsRoute] = useState(false);
    
    const onAlert = () => {
        Alert.alert("준비중입니다.");
        if (ControlMode === 'disable') setControlMode('start');
        else if (ControlMode === 'start') setControlMode('quit');
        else {
            setControlMode('disable');
            setSelectedArrival([]);
            setIsRoute(false);
        }
    }
    const goSearchCurrent = () => {
        navigation.navigate('Search');
    }
    const goSearchArrival = () => {
        navigation.navigate('Search');
        setTimeout(() => {
            setControlMode('start');
            setSelectedArrival({station: '영등포구청', line: ['line02','line05']});
            setIsRoute(true);
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
            <Title>이번 역</Title>
            <CurrentStation onPress={goSearchCurrent} />
            <Title>도착 역</Title>
            <ArrivalStation onPress={goSearchArrival} arrival={selectedArrival} />
            { isRoute 
                ? (<View>
                        <Title>경로</Title>
                        <RouteCarousel />
                    </View>)
                : <FavoriteMain onEdit={goFavoriteEdit} onAdd={goFavoriteAdd} favorite={favorite} />
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

const Title = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 24px;
`;

export default Main;
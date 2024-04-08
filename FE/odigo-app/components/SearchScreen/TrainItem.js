import React from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';
import { iconPath } from '../../iconPath';
import SearchStore from '../../store/SearchStore';

function TrainItem({ name, navigation, line }) {
  const { setLineList } = SearchStore();
  const onPressButton = async () => {
    // 비동기 함수로 변경
    try {
      const response = await fetch(
        `https://odigo-server-87daa8086d32.herokuapp.com/station/list?lineNum=${line}`
      );
      const data = await response.json();

      // API 응답 확인
      if (data.statusCode === 'OK') {
        // 역 선택 화면으로 이동 및 데이터 전달
        navigation.navigate('TrainSelect', { name, line, stationData: data.data });
        setLineList(data.data);
      } else {
        // API 요청 실패 시 알림 표시
        Alert.alert('Error', 'Failed to fetch station data');
      }
    } catch (error) {
      console.error('Error fetching station data:', error);
      // 네트워크 오류 등으로 인한 API 호출 실패 시 알림 표시
      Alert.alert('Error', 'Failed to fetch station data');
    }
  };

  return (
    <TrainItemBox>
      <CustomButton onPress={onPressButton}>
        <ButtonImage source={iconPath[line]} />
        <ButtonText>{name}</ButtonText>
      </CustomButton>
    </TrainItemBox>
  );
}

const TrainItemBox = styled.View`
  flex: 1;
  aspect-ratio: 1; /* width와 height를 동일하게 유지하도록 설정 */
  margin-right: 9px;
  margin-bottom: 9px;
  border-radius: 8px;
  background-color: rgb(44, 44, 53);
`;

const CustomButton = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ButtonImage = styled.Image`
  width: 32px;
  height: 32px;
`;

const ButtonText = styled.Text`
  font-size: 14px;
  color: rgb(255, 255, 255);
  margin-top: 10px;
`;

export default TrainItem;

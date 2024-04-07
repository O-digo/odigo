import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { iconPath } from '../../iconPath';

function TrainItem({ name, navigation, line }) {
  const onPressButton = () => {
    navigation.navigate('TrainSelect', { name, line });
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
  width: 109px;
  height: 88px;
  margin-right: 9px;
  margin-bottom: 9px;
  border-radius: 8px;
  background-color: rgb(44, 44, 53);
`;

const CustomButton = styled(TouchableOpacity)`
  height: 100%;
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

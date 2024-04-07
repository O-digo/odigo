import React, { useState } from 'react';
import { Vibration } from 'react-native';
import styled from 'styled-components/native';

export default function AlertSetting() {
  const [isAlert, setIsAlert] = useState(false);
  const [isVib, setIsVib] = useState(false);
  const toggleAlert = () => setIsAlert((previousState) => !previousState);
  const toggleVib = () => {
    setIsVib((previousState) => !previousState);
    if (!isVib) {
      Vibration.vibrate();
    }
  };

  return (
    <StyledView>
      <SettingBox>
        <StyledText>도착 알림 받기</StyledText>
        <Toggle
          trackColor={{ false: '#767577', true: '#3182f6' }}
          thumbColor={isAlert ? '#ffffff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleAlert}
          value={isAlert}
        />
      </SettingBox>
      <SettingBox>
        <StyledText>진동</StyledText>
        <Toggle
          trackColor={{ false: '#767577', true: '#3182f6' }}
          thumbColor={isVib ? '#ffffff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleVib}
          value={isVib}
        />
      </SettingBox>
    </StyledView>
  );
}

const StyledView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  margin-top: 24px;
`;

const SettingBox = styled.View`
  padding: 0 24px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 56px;
`;

const StyledText = styled.Text`
  color: white;
  font-size: 18px;
`;

const Toggle = styled.Switch``;

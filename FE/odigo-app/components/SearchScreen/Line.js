import React from 'react';
import styled from 'styled-components/native';
import LineList from './LineList';
import CloseImg from '../../assets/img/icon_close_Large_2x.png';

function Line({ name, line, navigation }) {
  const onPressButton = () => {
    navigation.navigate('Search');
  };
  return (
    <LineBox>
      <LineTitleBox>
        <LineTitle>{name}</LineTitle>
        <CloseButton onPress={onPressButton}>
          <CloseIcon source={CloseImg} />
        </CloseButton>
      </LineTitleBox>
      <LineList line={line} />
    </LineBox>
  );
}

const LineBox = styled.View`
  margin-top: 8px;
  flex: 1;
`;

const LineTitleBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LineTitle = styled.Text`
  font-size: 20px;
  color: rgb(255, 255, 255);
  height: 48px;
  text-align: center;
  padding: 12px;
  font-weight: bold;
`;

const CloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background-color: transparent;
  position: absolute;
  right: 25px;
`;

const CloseIcon = styled.Image`
  width: 32px;
  height: 32px;
`;

export default Line;

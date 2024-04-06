import React from 'react';
import imgSetting from '../../assets/img/icon_setting.png';
import styled from 'styled-components/native';

export default function Header({ onPress }) {
    return (
        <Container>
            <SettingButton onPress={onPress}>
                <SettingImage source={imgSetting}></SettingImage>
            </SettingButton>
        </Container>
    )
}

const Container = styled.View`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: flex-end;
`;

const SettingButton = styled.TouchableOpacity`
    padding: 71px 21.7px 16px 21.7px;
`;

const SettingImage = styled.Image`
    width: 24px;
    height: 24px;
`;
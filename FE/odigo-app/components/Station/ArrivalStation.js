import React from 'react';
import styled from 'styled-components/native';
import {
    line01, line02, line03, line04, line05, line06, line07, line08, line09,
    lineArex, lineGtxa, lineIc1, lineIc2, lineKc, lineKg, lineKj, lineKk,
    lineSb, lineSbd, lineSh, lineSl, lineUk, lineUs, lineYi
} from '../LineIcon/LineIcon.js';

export default function ArrivalStation({onPress, arrival}) {
  return (
    <Container onPress={onPress} underlayColor='#fff'>
      { arrival.station 
        ? (
          <Wrap>
            {arrival.line.map((line, idx) => <StationImage source={lineNumber(line)} key={idx} />)}
            <ArrivalText>{arrival.station}</ArrivalText>
          </Wrap>
        )
        : <ArrivalText>선택하기</ArrivalText>
      }
    </Container>
  )
}

const Container = styled.TouchableOpacity`
    height: 80px;
    margin: 0 24px 24px 24px;
    padding: 24px;
    font-size: 20px;
    background-color: rgb(44, 44, 54);
    border: 2px solid rgb(49, 130, 246);
    border-radius: 24px;
`;

const Wrap = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 24px;
`;

const StationImage = styled.Image`
    width: 32px;
    height: 32px;
    margin-right: 4px;
`;

const ArrivalText = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding-left: 4px;
    text-align: center;
`;

export function lineNumber (line) {
    let lineImag = '';
    switch (line) {
      case 'line01': {
        lineImag = line01;
        break;
      }
      case 'line02': {
        lineImag = line02;
        break;
      }
      case 'line03': {
        lineImag = line03;
      }
      case 'line04': {
        lineImag = line04;
        break;
      }
      case 'line05': {
        lineImag = line05;
        break;
      }
      case 'line06': {
        lineImag = line06;
      }
      case 'line07': {
        lineImag = line07;
        break;
      }
      case 'line08': {
        lineImag = line08;
      }
      case 'line09': {
        lineImag = line09;
        break;
      }
      case 'lineArex': {
        lineImag = lineArex;
        break;
      }
      case 'lineGtxa': {
        lineImag = lineGtxa;
      }
      case 'lineIc1': {
        lineImag = lineIc1;
      }
      case 'lineIc2': {
        lineImag = lineIc2;
        break;
      }
      case 'lineKc': {
        lineImag = lineKc;
      }
      case 'lineKg': {
        lineImag = lineKg;
        break;
      }
      case 'lineKj': {
        lineImag = lineKj;
        break;
      }
      case 'lineKk': {
        lineImag = lineKk;
      }
      case 'lineISb': {
        lineImag = lineSb;
        break;
      }
      case 'lineSbd': {
        lineImag = lineSbd;
      }
      case 'lineSh': {
        lineImag = lineSh;
        break;
      }
      case 'lineSl': {
        lineImag = lineSl;
        break;
      }
      case 'lineUk': {
        lineImag = lineUk;
      }
      case 'lineUs': {
        lineImag = lineUs;
        break;
      }
      case 'lineYi': {
        lineImag = lineYi;
      }
    }
    return lineImag;
  };
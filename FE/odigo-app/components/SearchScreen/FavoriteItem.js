import React from 'react';
import styled from 'styled-components/native';

function FavoriteItem({ name }) {
  return (
    <FavoriteItemBox>
      <FavoriteItemTitle>{name}</FavoriteItemTitle>
    </FavoriteItemBox>
  );
}

const FavoriteItemBox = styled.View`
  height: 40px;
  padding: 11.5px 24px 11.5px 24px;
  border-radius: 12px;
  background-color: rgb(44, 44, 53);
  margin-right: 8px;
`;
const FavoriteItemTitle = styled.Text`
  font-size: 14px;
  color: rgb(255, 255, 255);
`;

export default FavoriteItem;

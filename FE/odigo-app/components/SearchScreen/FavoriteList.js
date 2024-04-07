import React from 'react';
import styled from 'styled-components/native';
import FavoriteItem from './FavoriteItem';

function FavoriteList({ favoriteItems }) {
  return (
    <FavoriteListBox>
      <ListScroll horizontal={true} showsHorizontalScrollIndicator={false}>
        {favoriteItems.map((item) => (
          <FavoriteItem key={item.id} name={item.name} />
        ))}
      </ListScroll>
    </FavoriteListBox>
  );
}

const FavoriteListBox = styled.View`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  height: 40px;
  overflow-x: scroll;
  padding-left: 24px;
`;

const ListScroll = styled.ScrollView``;

export default FavoriteList;

import React from 'react';
import styled from 'styled-components/native';
import FavoriteItem from './FavoriteItem';

function FavoriteList() {
  const favoriteItems = [
    {
      id: 1,
      name: '강남역',
    },
    {
      id: 2,
      name: '잠실역',
    },
    {
      id: 3,
      name: '영등포역',
    },
    {
      id: 4,
      name: '구로역',
    },
    {
      id: 5,
      name: '구로역',
    },
  ];

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
  padding-left: 24px;
  display: flex;
  flex-direction: row;
  height: 40px;
  overflow-x: scroll;
`;

const ListScroll = styled.ScrollView``;

export default FavoriteList;

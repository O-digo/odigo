import React from 'react';
import { View } from 'react-native';
import FavoriteStation from './FavoriteStation.js';
import AddFavorite from './AddFavorite.js';
import FavoriteList from '../SearchScreen/FavoriteList';

export default function FavoriteMain({ onEdit, onAdd, favorite }) {
  return (
    <View>
      <FavoriteStation onPress={onEdit} />
      {favorite.length ? (
        <FavoriteList favoriteItems={favorite} />
      ) : (
        <AddFavorite onPress={onAdd} />
      )}
    </View>
  );
}

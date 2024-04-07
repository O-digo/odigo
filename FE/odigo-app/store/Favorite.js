import { create } from 'zustand';

const favoriteStore = create((set) => ({
  favoriteLineList: [
    { id: 1, name: '가능', line: 'line1' },
    { id: 2, name: '가산디지털단지', line: 'line1' },
    { id: 3, name: '간석', line: 'line1' },
    { id: 4, name: '개봉', line: 'line1' },
    { id: 5, name: '관악', line: 'line1' },
  ],
  removeFavoriteLine: (name) =>
    set((state) => ({
      favoriteLineList: state.favoriteLineList.filter((item) => item.name !== name),
    })),
}));

export default favoriteStore;

import { create } from 'zustand';

const SearchStore = create((set) => ({
  searchKeyword: '',
  setSearchKeyword: (keyword) => set({ searchKeyword: keyword }),
  clearSearchKeyword: () => set({ searchKeyword: '' }),
}));

export default SearchStore;

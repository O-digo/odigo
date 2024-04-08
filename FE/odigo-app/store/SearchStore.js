import { create } from 'zustand';

const SearchStore = create((set) => ({
  searchKeyword: '',
  setSearchKeyword: (keyword) => set({ searchKeyword: keyword }),
  clearSearchKeyword: () => set({ searchKeyword: '' }),
  lineList: [],
  setLineList: (lines) => set({ lineList: lines }),
}));

export default SearchStore;

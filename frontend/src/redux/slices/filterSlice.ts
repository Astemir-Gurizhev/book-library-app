import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
    title: string;
    author: string;
    onlyFavorite: boolean;
}

const initialState: FilterState = {
    title: '',
    author: '',
    onlyFavorite: false,
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setTitleFilter: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
        setAuthorFilter: (state, action: PayloadAction<string>) => {
            state.author = action.payload;
        },
        setOnlyFavoriteFilter: (state) => {
            state.onlyFavorite = !state.onlyFavorite;
        },
        resetFilters: () => initialState,
    },
});

export const {
    setTitleFilter,
    setAuthorFilter,
    setOnlyFavoriteFilter,
    resetFilters,
} = filterSlice.actions;

export const selectTitleFilter = (state: { filter: FilterState }) => state.filter.title;
export const selectAuthorFilter = (state: { filter: FilterState }) => state.filter.author;
export const selectOnlyFavoriteFilter = (state: { filter: FilterState }) => state.filter.onlyFavorite;

export default filterSlice.reducer;
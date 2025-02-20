import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import booksReducer from './slices/booksSlice';
import errorReducer from './slices/errorSlice';
import filterReducer from './slices/filterSlice';

const store = configureStore({
    reducer: {
        books: booksReducer,
        error: errorReducer,
        filter: filterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
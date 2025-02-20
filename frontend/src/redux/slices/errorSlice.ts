import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ErrorState = string;

const initialState: ErrorState = '';

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (_, action: PayloadAction<string>) => {
            return action.payload;
        },
        clearError: () => initialState,
    },
});

export const { setError, clearError } = errorSlice.actions;

export const selectErrorMessage = (state: { error: ErrorState }) => state.error;

export default errorSlice.reducer;
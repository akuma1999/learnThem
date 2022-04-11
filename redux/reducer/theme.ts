import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface ThemeState {
  font: string;
}

// Define the initial state using that type
const initialState: ThemeState = {
  font: 'roboto',
};

export const themeSlice = createSlice({
  name: 'theme',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    changeFont: (state, action: PayloadAction<string>) => {
      state.font = action.payload;
    },
  },
});

export const { changeFont } = themeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTheme = (state: RootState) => state.themeReducer;

export default themeSlice.reducer;

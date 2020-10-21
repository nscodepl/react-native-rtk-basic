import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
});

export const store = configureStore({
  reducer: counterSlice.reducer
});

const { actions, reducer } = counterSlice;

export const { increment, decrement } = actions;
export const counterSelector = state => state;

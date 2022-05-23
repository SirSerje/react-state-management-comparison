import {configureStore, createSlice} from '@reduxjs/toolkit';

const initialState = {value: 0};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      if (state.value > 0) {
        state.value--;
      }
    },
  },
});
//FIXME: state any
export const selectCount = (state: any) => state.counter.value;

export const {increment, decrement} = counterSlice.actions;

export const counterSliceReducer = counterSlice.reducer;

export const reduxToolkitStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

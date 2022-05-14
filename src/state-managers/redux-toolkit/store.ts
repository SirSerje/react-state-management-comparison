import {
    configureStore,
    createSlice,
    PayloadAction,
    createAsyncThunk,
} from "@reduxjs/toolkit";
import {apiCall} from "../../api";

//TODO: use RTK Query for fetch https://redux-toolkit.js.org/rtk-query/overview

// const fetchUserById = createAsyncThunk(
//     'users/fetchByIdStatus',
//     async (userId: number, thunkAPI) => {
//         const response = await apiCall();
//         return response
//     }
// )

const initialState = { value: 0 }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value++
        },
        decrement(state) {
            if(state.value > 0) {
                state.value--
            }
        },
    },
})
//FIXME: state any
export const selectCount = (state:any) => state.counter.value;

export const { increment, decrement } = counterSlice.actions

export const conterSliceReducer = counterSlice.reducer

export const reduxToolkitStore = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
});



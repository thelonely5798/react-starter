import { createAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";



interface ExampleSate  { 
    number: number;
}

const initialState = {
    number: 0, 
}

export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers:{
      increment: () => {},
      incrementSuccess: (state) => {
        state.number += 1
      },
  },  
})

export const { increment, incrementSuccess } = counterSlice.actions

export const counterReducer = counterSlice.reducer
export const counterSelector = (state:RootState) => state.counter
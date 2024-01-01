import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{counter:0},
    reducers:{
      increment:(store)=>{
        store.counter++;
      },
      decrement:(store)=>{
        store.counter--;
      },
      add:(store,action)=>{
        store.counter+=Number(action.payload);
      },
      substract:(store,action)=>{
        store.counter-=Number(action.payload);
      }
    }
  })
  
  export const counterActions=counterSlice.actions;

  export default counterSlice;
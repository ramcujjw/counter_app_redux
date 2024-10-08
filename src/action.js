//initializing the reducers and state
import {createSlice} from '@reduxjs/toolkit'

const counterSlice=createSlice({
    name: 'counter', // counter can be changed
    initialState:0,
    reducers:{
        increment:state=>state+1, //increment and decrement name can change
        decrement:state=>state-1
    }
})
 export const {increment,decrement}=counterSlice.actions;




 

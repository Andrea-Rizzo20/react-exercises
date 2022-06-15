import { createSlice } from "@reduxjs/toolkit";


export const todosState = createSlice({
    name: 'todos',
    initialState:[],
    reducers:{
        add:(state,action) => [...state, action.payload],
        edit:(state,action) => state.map(todo => {
            if(todo.id === action.payload.id){
                return {...todo, ...action.payload}
            }
            return todo
        }),
        remove:(state,action) => state.filter(todo=> todo.id !== action.payload.id)
    }
})
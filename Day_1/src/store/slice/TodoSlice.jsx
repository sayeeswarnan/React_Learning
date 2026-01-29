// name,initialState,reducers

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList : [],
}

const todoReducer = createSlice({
    name:"todo",
    initialState:initialState,
    reducers:{
        // combine all the actions that you need

        addTodo(state,action){
            console.log(action)
            const newlyCreatedTodo = {
                id : state.todoList===0 ? 1 : state.todoList.length + 1,
                title : action.payload
            }
            state.todoList.push(newlyCreatedTodo);
                                      
        },

        DeleteTodo(state,action){
              
              console.log(action);
               state.todoList = state.todoList.filter(todoitem=>todoitem.id !== action.payload)
               return state
        },

        EditTodo(state,action){
               
            let getTodo = state.todoList
                
        }


    }
})

export const {addTodo,DeleteTodo,EditTodo} = todoReducer.actions;

export default todoReducer.reducer;
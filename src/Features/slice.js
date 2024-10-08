// src/features/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("todoList")) || [], // Parse it as JSON or use an empty array
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateTodo: (state, action) => {
      state.value = [...state.value, action.payload];
      localStorage.setItem("todoList", JSON.stringify(state.value));
    },

    deleteTodo: (state, action) => {
      state.value = state.value.filter((item, index) => index !== action.payload)
      localStorage.setItem("todoList", JSON.stringify(state.value));
    },

    editTodo: (state, action) => {
      state.value[action.payload[1]]=action.payload[0]
      localStorage.setItem("todoList", JSON.stringify(state.value));      
    },
  }
});

export const { updateTodo,deleteTodo,editTodo } = counterSlice.actions;

export default counterSlice.reducer;

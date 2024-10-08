// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Features/slice'

const store = configureStore({
  reducer: {
    counter: counterReducer, // add reducers here
  },
});

export default store;

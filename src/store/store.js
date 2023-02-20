import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// import { authSlice } from "./features/authSlice";

const store = configureStore({
  reducer: {
    // [authSlice.name]: authSlice.reducer,
  },
  devTools: true,
});

export default store;

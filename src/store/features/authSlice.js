import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  authState: false,
};

export const login = createAsyncThunk("login", async () => {
  // const res = ....
  // return res
});

// Actual Slice
export const authSlice = createSlice(
  {
    name: "auth",
    initialState,
    reducers: {
      // Action to set the authentication status
      setAuthState(state, action) {
        state.authState = action.payload;
      },

      // Special reducer for hydrating the state. Special case for next-redux-wrapper
      // extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.auth,
        };
      },
    },
  }
  //   extraReducers: (builder) => {
  //     builder.addCase(login.pending, (state, action) => {
  //       // ...
  //     });
  //     builder.addCase(login.fulfilled, (state, action) => {
  //       // ...
  //     });
  //     builder.addCase(login.rejected, (state, action) => {
  //       // ...
  //     });
  //   },
);

export const { setAuthState } = authSlice.actions;

export const selectAuthState = (state) => state.auth.authState;

export default authSlice.reducer;

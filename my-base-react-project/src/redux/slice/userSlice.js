import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state) => {
      console.log("change login state in redux");
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLogin, logout } = userSlice.actions;

export default userSlice.reducer;

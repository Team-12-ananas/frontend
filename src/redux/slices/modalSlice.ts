import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isShow: true,
};

export const modalSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setShow: (state, action: PayloadAction<boolean>) => {
      state.isShow = action.payload;
    },
  },
});

export const { setShow } = modalSlice.actions;

export default modalSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  isShow: boolean;
  currentIdResume: number | null;
  currentIdVacancy: number | null;
}

const initialState: IInitialState = {
  isShow: false,
  currentIdResume: null,
  currentIdVacancy: null,
};

export const modalSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setShow: (state, action: PayloadAction<boolean>) => {
      state.isShow = action.payload;
    },
    setModalCurrentIdResume: (state, action: PayloadAction<number | null>) => {
      state.currentIdResume = action.payload;
    },
    setModalCurrentIdVacancy: (state, action: PayloadAction<number>) => {
      state.currentIdVacancy = action.payload;
    },
  },
});

export const { setShow, setModalCurrentIdResume, setModalCurrentIdVacancy } =
  modalSlice.actions;

export default modalSlice.reducer;

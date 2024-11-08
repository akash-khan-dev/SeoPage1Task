import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: localStorage.getItem("file")
    ? JSON.parse(localStorage.getItem("file"))
    : [],
};

export const uploadFIleSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    uploadFIle: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { uploadFIle } = uploadFIleSlice.actions;

export default uploadFIleSlice.reducer;

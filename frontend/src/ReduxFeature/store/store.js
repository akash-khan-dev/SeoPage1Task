import { configureStore } from "@reduxjs/toolkit";
import uploadFIleSlice from "../slice";

export const store = configureStore({
  reducer: {
    fileUpload: uploadFIleSlice,
  },
});

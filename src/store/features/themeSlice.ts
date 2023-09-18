import { storeInfo } from "@/constant";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    storeInfo: storeInfo || {},
  },
};

export const theme = createSlice({
  name: "Theme",
  initialState,
  reducers: {},
});

export const {} = theme.actions;

export default theme.reducer;

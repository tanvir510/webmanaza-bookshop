// Import Library
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

// Import File
import productReducer from "./features/productSlice";
import themeReducer from "./features/themeSlice";

export const store = configureStore({
  reducer: { productReducer, themeReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

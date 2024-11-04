import { configureStore } from '@reduxjs/toolkit';

import layoutReducer from "@/redux/slices/layoutSlice"
import dataReducer from "@/redux/slices/dataSlice"

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    data: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

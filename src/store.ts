import { configureStore } from '@reduxjs/toolkit'
import counterListReducer from "./slice/counterSlice";

export const store = configureStore({
  reducer: {
    counterListReducer: counterListReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
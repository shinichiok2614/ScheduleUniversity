import { configureStore } from '@reduxjs/toolkit';
import lecturerSlice from './features/lecturer';

const store = configureStore({
  reducer: {
    lecturer: lecturerSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

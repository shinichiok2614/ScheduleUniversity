import { configureStore } from '@reduxjs/toolkit';
import lecturerSlice from './features/lecturer';
import timetableSlice from './features/timetable';

const store = configureStore({
  reducer: {
    lecturer: lecturerSlice.reducer,
    timetable: timetableSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

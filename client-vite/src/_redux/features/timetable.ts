import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ListLecturer } from '../../types/lecturer/lecturer';
import fetchlecturer from '../../apis/lecturer';
import { useAppSelector } from '../hook';
import { ListTimetable } from '../../types/timetable/timetable';
import fetchtimetable from '../../apis/timetable';

export interface TimetableState {
  timetable: {
    loading: boolean;
    list: ListTimetable;
  };
}
const initialState: TimetableState = {
  timetable: {
    loading: false,
    list: [],
  },
};

export const getTimetableAction = createAsyncThunk('timetable/fetchtimetable', async () => {
  return await fetchtimetable();
});
const timetableSlice = createSlice({
  name: 'timetable',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTimetableAction.pending, (state) => {
        state.timetable.loading = true;
      })
      .addCase(getTimetableAction.fulfilled, (state, action) => {
        state.timetable.loading = false;
        state.timetable.list = action.payload;
      })
      .addCase(getTimetableAction.rejected, (state) => {
        state.timetable.loading = false;
        state.timetable.list = [];
      });
  },
});

export const TimetablesSelector = () => useAppSelector((state) => state.timetable.timetable);

export default timetableSlice;

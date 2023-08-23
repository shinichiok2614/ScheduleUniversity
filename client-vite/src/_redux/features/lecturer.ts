import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ListLecturer } from '../../types/lecturer/lecturer';
import fetchlecturer from '../../apis/lecturer';
import { useAppSelector } from '../hook';

// export interface ListLecturer{
//   lecturers: Lecturer[];
// }

export interface LecturerState {
  lecturer: {
    loading: boolean;
    list: ListLecturer;
  };
}

const initialState: LecturerState = {
  lecturer: {
    loading: false,
    list: [],
  },
};

export const getLecturerAction = createAsyncThunk('lecturer/fetchlecturer', async () => {
  return await fetchlecturer();
});
const lecturerSlice = createSlice({
  name: 'lecturer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // builder.addCase('GET_LECTURER_LIST' as any , (state,{payload})=>{
    builder
      .addCase(getLecturerAction.pending, (state) => {
        state.lecturer.loading = true;
      })
      .addCase(getLecturerAction.fulfilled, (state, action) => {
        state.lecturer.loading = false;
        state.lecturer.list = action.payload.list;
      })
      .addCase(getLecturerAction.rejected, (state) => {
        state.lecturer.loading = false;
        state.lecturer.list = [];
      });
  },
});

export const LecturersSelector=()=>useAppSelector((state)=>state.lecturer.lecturer)

export default lecturerSlice;

import { useEffect } from 'react';
import { LecturersSelector, getLecturerAction } from '../../_redux/features/lecturer';
import { useAppDispatch } from '../../_redux/hook';
import { Lecturer } from '../../types/lecturer/lecturer';
import { TimetablesSelector, getTimetableAction } from '../../_redux/features/timetable';
import { ITimetable } from '../../types/timetable/timetable';

function useGetListTimetable(): [boolean, ITimetable[]] {
  const dispatch = useAppDispatch();
  const getTimetables = () => {
    dispatch(getTimetableAction());
  };
  useEffect(() => {
    getTimetables();
  }, []);
  const timetableSelector = TimetablesSelector();
  const { loading, list } = timetableSelector;
  return [loading, list];
}

export default useGetListTimetable;

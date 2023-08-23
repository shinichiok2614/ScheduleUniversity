import { useEffect } from 'react';
import { LecturersSelector, getLecturerAction } from '../../_redux/features/lecturer';
import { useAppDispatch } from '../../_redux/hook';
import { Lecturer } from '../../types/lecturer/lecturer';
const dispatch = useAppDispatch();

function useGetListLecturer(): [boolean, Lecturer[]] {
  const getLecturers = () => {
    dispatch(getLecturerAction());
  };
  useEffect(() => {
    getLecturers();
  }, []);
  const lecturerSelector = LecturersSelector();
  const { loading, list } = lecturerSelector;
  return [loading, list];
}

export default useGetListLecturer;

import axios from 'axios';
import BASE_URL from '..';
import { getUserToken } from '../../helper/storage';
import { ILecturerRequest } from '../../types/login/lecturer';

const fetchtimetable = async () => {
  const res = await axios.get(`${BASE_URL}/department/timetablelist`, {
    headers: {
      Authorization: `Bearer ${getUserToken()}`,
    },
  });
  const resData: any = {
    list: res.data,
    status: true,
  };
  return resData.list.message;
};
const getlecturer = async (id: any) => {
  const res = await axios.post(`${BASE_URL}/department/lecturerget`, {
    id,
  });
  const resData: any = {
    list: res.data,
    status: true,
  };
  return resData.list.message;
};
const registerlecturerAPI = (values: ILecturerRequest) => {
  return axios.post(`${BASE_URL}/department/lecturercreate`, {
    firstName: values.firstName,
    lastName: values.lastName,
    username: values.username,
    password: values.password,
    phone: values.phone,
    email: values.email,
    dateofbirth: values.dateofbirth,
    address: values.address,
    degree: values.degree,
    acedemicRank: values.acedemicRank,
    armyRank: values.armyRank,
    profilePicture: values.profilePicture,
  });
};
const editlecturerAPI = (values: ILecturerRequest) => {
  return axios.post(`${BASE_URL}/department/lectureredit`, {
    id: values.id,
    firstName: values.firstName,
    lastName: values.lastName,
    username: values.username,
    password: values.password,
    phone: values.phone,
    email: values.email,
    dateofbirth: values.dateofbirth,
    address: values.address,
    degree: values.degree,
    acedemicRank: values.acedemicRank,
    armyRank: values.armyRank,
    profilePicture: values.profilePicture,
  });
};
const deletelecturerAPI = async (values: any) => {
  console.log(values.id);
  const res = await axios.post(`${BASE_URL}/department/lecturerdelete`, {
    id: values.id,
  });
  return console.log(res);
};
export default fetchtimetable;
export { registerlecturerAPI, getlecturer, editlecturerAPI, deletelecturerAPI };

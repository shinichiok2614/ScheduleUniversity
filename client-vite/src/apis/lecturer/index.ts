import axios from 'axios';
import BASE_URL from '..';
import { getUserToken } from '../../helper/storage';
import { ILecturerRequest } from '../../types/login/lecturer';

const fetchlecturer = async () => {
  const res = await axios.get(`${BASE_URL}/department/lecturerlist`, {
    headers: {
      Authorization: `Bearer ${getUserToken()}`,
    }
  });
  const resData: any = {
    list: res.data,
    status: true,
  };
//   console.log(resData.list.message);
  return resData.list.message;
};
const registerlecturerAPI = (values: ILecturerRequest) => {
  return axios.post(`${BASE_URL}/department/lecturercreate`, {
    firstName: values.firstName,
    lastName: values.lastName,
    username: values.username,
    password: values.password,
    phone:values.phone,
    email: values.email,
    dateofbirth:values.dateofbirth,
    address: values.address,
    degree: values.degree,
    acedemicRank: values.acedemicRank,
    armyRank: values.armyRank,
    profilePicture: values.profilePicture,
  });
};
export default fetchlecturer;
export { registerlecturerAPI };
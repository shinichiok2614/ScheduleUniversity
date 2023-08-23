import axios from 'axios';
import BASE_URL from '..';
import { getUserToken } from '../../helper/storage';

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

export default fetchlecturer;

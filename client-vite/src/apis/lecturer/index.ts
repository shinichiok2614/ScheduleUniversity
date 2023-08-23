import axios from 'axios';
import BASE_URL from '..';

const fetchlecturer = async () => {
  const res = await axios.get(`${BASE_URL}/department/lecturerlist`);
  const resData: any = {
    list: res.data,
    status: true,
  };
  return resData;
};

export default fetchlecturer;

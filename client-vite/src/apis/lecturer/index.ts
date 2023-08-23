import axios from 'axios';
import BASE_URL from '..';

const fetchlecturer = async () => {
  const res = await axios.get(`${BASE_URL}/department/lecturerlist`);
  const resData: any = {
    list: res.data,
    status: true,
  };
//   console.log(resData.list.message);
  return resData.list.message;
};

export default fetchlecturer;

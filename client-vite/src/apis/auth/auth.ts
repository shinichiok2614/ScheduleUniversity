import axios from 'axios';
import BASE_URL from '..';
import ILogin from '../../types/login/auth';

const loginAPI = async (values: ILogin) => {
  axios
    .post(`${BASE_URL}/auth/login`, {
      username: values.username,
      password: values.password,
    })
    .then((res) => {
      console.log(res);
    });
};

export default loginAPI;

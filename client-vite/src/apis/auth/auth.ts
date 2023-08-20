import axios from 'axios';
import BASE_URL from '..';
import ILogin, { ILoginResponse, IRegisterRequest } from '../../types/login/auth';

const loginAPI = async (values: ILogin) => {
  return axios
    .post(`${BASE_URL}/auth/login`, {
      username: values.username,
      password: values.password,
    })
    .then((res) => {
      const loginRes: ILoginResponse = {
        username: res.data.username,
        token: res.data.accesstoken,
      };
      return loginRes;
    });
};

const registerAPI = (values: IRegisterRequest) => {
  return axios.post(`${BASE_URL}/auth/register`, {
    username: values.username,
    password: values.password,
    email: values.email,
    firstName: values.firstName,
    lastName: values.lastName,
    nickname: values.nickname,
    phone: values.phone,
    address: values.address,
    classes: values.classes,
    army_rank: values.army_rank,
    avatar: values.avatar,
  });
};
export default loginAPI;
export { registerAPI };

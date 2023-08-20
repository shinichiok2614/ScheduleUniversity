const setUserToken = (token: string) => {
  localStorage.setItem('auth-token', token);
};
const removeUserToken = () => {
  return new Promise((resolve, reject) => {
    try {
      resolve(localStorage.removeItem('auth-token'));
    } catch (error) {
      reject(error);
    } finally {
    }
  });
};
const getUserToken = () => {
  return localStorage.getItem('auth-token');
};
export { setUserToken, removeUserToken, getUserToken }

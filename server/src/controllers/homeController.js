import db from '../models';
let getHomePage = (req, res) => {
  console.log('gethomepage');
  return res.status(200).json({
    errCode: 0,
    message: 'hello world',
  });
};
let login = async (req, res) => {
  console.log('login');
  const data = await db.User.findAll();
  return res.status(200).json({
    errCode: 0,
    data,
  });
};
// export default getHomePage
module.exports = {
  getHomePage,
  login,
};

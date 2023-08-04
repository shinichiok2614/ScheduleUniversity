import db from '../models';
let getHomePage = (req, res) => {
  console.log('gethomepage');
  return res.status(200).json({
    errCode: 0,
    message: 'hello world',
  });
};
let get = async (req, res) => {
  console.log('get');
  const data = await db.User.findAll();
  return res.status(200).json({
    errCode: 0,
    data,
  });
};

module.exports = {
  getHomePage,
  get,
};

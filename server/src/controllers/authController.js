const login = (req, res) => {
  console.log('login');
  //   const data = await db.User.findOne();
  return res.render('login.ejs');
};
const test = (req, res) => {
  return res.send('test');
};
module.exports = {
  login,
  test,
};

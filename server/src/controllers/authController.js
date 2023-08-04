const login = (req, res) => {
  //   const data = await db.User.findOne();
  console.log('login');
    const { username, password } = req.body;
    console.log(username);
  return res.status(200).json({
    errCode: 0,
    message: 'login',
  });
};

module.exports = {
  login,
};

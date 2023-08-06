const db = require('../models');

const register = async (req, res) => {
  console.log('register');
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({
      errCode: 2,
      message: 'Missing username and/or password',
    });
  try {
    const student = await db.student.findOne({
      where: {
        username: username,
      },
    });
    if (student) {
      return res.status(400).json({
        errCode: 3,
        message: 'User already taken',
      });
    }
    // if (!student) {
    //   // const hashpassword = await argon2.hash(password);
    //   const newStudent = new db.student({ username, password: password });
    //   await newStudent.save();
    //   return res.status(200).json({
    //     errCode: 0,
    //     message: 'create student account success',
    //   });
    // }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      errCode: 1,
      message: 'Internal server error',
    });
  }
};

const login = async (req, res) => {
  //   const data = await db.User.findOne();
  console.log('login');
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({
      errCode: 2,
      message: 'Missing username and/or password',
    });

  try {
    const data = await db.User.findOne({
      where: {
        firstName: username,
      },
    });

    if (!data)
      return res.status(400).json({
        errCode: 3,
        message: 'Incorrect username',
      });
    return res.status(200).json({
      errCode: 0,
      message: 'login',
    });
  } catch (error) {
    console.log(err);
    res.status(500).json({
      errCode: 1,
      message: 'Internal server error',
    });
  }
};

module.exports = {
  login,
  register,
};

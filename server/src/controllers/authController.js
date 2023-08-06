import 'dotenv/config';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

const db = require('../models');
const register = async (req, res) => {};
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
    const data = await db.student.findOne({
      where: {
        username,
      },
    });
    if (!data)
      return res.status(400).json({
        errCode: 3,
        message: 'Incorrect username',
      });
    const passwordconfirm = await argon2.verify(data.password, password);
    if (!passwordconfirm)
      return res.status(401).json({
        errCode: 0,
        message: 'Incorrect password',
      });

    const accesstoken = jwt.sign({ userID: data.id }, process.env.ACCESS_TOKEN_SECRET);
    res.status(200).json({
      errCode: 0,
      message: 'User logged in successfully',
      accesstoken,
    });
  } catch (error) {
    console.log(error);
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

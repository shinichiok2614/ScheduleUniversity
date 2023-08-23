import 'dotenv/config';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

const db = require('../models');
const verify = async (req, res) => {
  try {
    const user = await db.department.findOne({
      where: {
        id: req.userId,
      },
      attributes: {
        exclude: ['password'],
      },
    });
    console.log(user);
    if (!user) return res.status(400).json({ success: false, message: 'User not found' });
    res.json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal server error2' });
  }
};

const register = async (req, res) => {
  console.log('register');
  const {
    firstName,
    lastName,
    username,
    password,
    phone,
    email,
    nickname,
    address,
    classes,
    army_rank,
    avatar,
  } = req.body;
  if (!username || !password)
    return res.status(400).json({
      errCode: 2,
      message: 'Missing username and/or password',
    });
  try {
    // const user = await db.student.findOne({
    const user = await db.department.findOne({
      where: {
        username,
      },
    });
    if (user)
      return res.status(401).json({
        errCode: 3,
        message: 'User already taken',
      });
    const hashpassword = await argon2.hash(password);
    // const newStudent = new db.student({
    const newStudent = new db.department({
      firstName,
      lastName,
      username,
      password: hashpassword,
      phone,
      email,
      nickname,
      address,
      classes,
      army_rank,
      avatar,
    });
    await newStudent.save();
    return res.status(200).json({
      errCode: 0,
      // message: 'create student successfully',
      message: 'create department successfully',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      errCode: 1,
      message: 'Internal server error',
    });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  if (!username || !password)
    return res.status(400).json({
      errCode: 2,
      message: 'Missing username and/or password',
    });
  try {
    // const data = await db.student.findOne({
    const data = await db.department.findOne({
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
const test = (req, res) => {
  res.status(500).json({
    message: 'test',
  });
};
module.exports = {
  login,
  register,
  verify,
  test,
};
import 'dotenv/config';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

const db = require('../models');
const getlecturerlist = async (req, res) => {
  try {
    const data = await db.lecturer.findAll();
    if (data) {
      const dataValues = data.map((item) => item.dataValues);
      return res.status(200).json({
        errCode: 0,
        message: dataValues,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
const getlecturer = async (req, res) => {
  console.log('getlecturer');
  const { id } = req.body;
  console.log(id);
  try {
    const data = await db.lecturer.findOne({
      where: {
        id,
      },
    });
    if (data) {
      // const dataValues = data.map((item) => item.dataValues);
      return res.status(200).json({
        errCode: 0,
        message: data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const createlecturer = async (req, res) => {
  console.log('createlecturer');
  const {
    firstName,
    lastName,
    username,
    password,
    phone,
    email,
    dateofbirth,
    address,
    degree,
    acedemicRank,
    armyRank,
    profilePicture,
  } = req.body;
  console.log(req.body);
  if (!username || !password)
    return res.status(400).json({
      errCode: 2,
      message: 'Missing username and/or password',
    });
  try {
    const user = await db.lecturer.findOne({
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
    const newStudent = new db.lecturer({
      firstName,
      lastName,
      username,
      password: hashpassword,
      phone,
      email,
      dateofbirth,
      address,
      degree,
      acedemicRank,
      armyRank,
      profilePicture,
    });
    await newStudent.save();
    return res.status(200).json({
      errCode: 0,
      // message: 'create student successfully',
      message: 'create lecturer successfully',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      errCode: 1,
      message: 'Internal server error',
    });
  }
};

const editlecturer = async (req, res) => {
  console.log('editlecturer');
  const {
    id,
    firstName,
    lastName,
    username,
    password,
    phone,
    email,
    dateofbirth,
    address,
    degree,
    acedemicRank,
    armyRank,
    profilePicture,
  } = req.body;
  console.log(req.body);
  if (!username || !password)
    return res.status(400).json({
      errCode: 2,
      message: 'Missing username and/or password',
    });
  try {
    const user = await db.lecturer.findOne({
      where: {
        id,
      },
    });
    if (user) {
      const hashpassword = await argon2.hash(password);
      await user.update({
        firstName,
        lastName,
        username,
        password: hashpassword,
        phone,
        email,
        dateofbirth,
        address,
        degree,
        acedemicRank,
        armyRank,
        profilePicture,
      });
      return res.status(200).json({
        errCode: 3,
        message: 'Lecturer updated',
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      errCode: 1,
      message: 'Internal server error',
    });
  }
};
const deletelecturer = async (req, res) => {
  console.log('deletelecturer');
  const { id } = req.body;
  console.log(id);
  try {
    const user = await db.lecturer.findOne({
      where: {
        id,
      },
    });
    if (user) {
      await db.lecturer.destroy({
        where: {
          id,
        },
      });
      return res.status(200).json({
        errCode: 0,
        message: 'Lecturer deleted',
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      errCode: 1,
      message: error,
    });
  }
};
module.exports = {
  getlecturerlist,
  createlecturer,
  editlecturer,
  deletelecturer,
  getlecturer,
};

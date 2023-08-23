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
// const createlecturer = async (req, res) => {
//   try {
    
//   }
// }
module.exports = {
  getlecturerlist,
};

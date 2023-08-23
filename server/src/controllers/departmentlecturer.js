const db = require('../models');

const getlecturerlist = async (req, res) => {
  // console.log('getlecturerlist');
  try {
    const data = await db.lecturer.findAll();
    if (data) {
      //   const { lecturer } = data;
      const dataValues = data.map((item) => item.dataValues);
      // console.log(dataValues);
      return res.status(200).json({
        errCode: 0,
        message: dataValues,
      });
    }
  } catch (error) {
    console.log(error);
  }
  //   res.status(500).json({
  //       message: 'hlw',
  //   });
};
module.exports = {
  getlecturerlist,
};

import db from '../models';
import { connection } from '../config/connectDB';
let getHomePage = (req, res) => {
  console.log('gethomepage');
  return res.render('timetable/index.ejs');
};
let createtimetable = (req, res) => {
  console.log('createtimetable');
  return res.render('timetable/create-timetable.ejs');
};
let createAtimetable = (req, res) => {
  console.log('createAtimetable');
  const { subject, classes, room, timestart, timeend, id_lecturer } = req.body;

  const sql =
    'INSERT INTO timetables (subject, classes, room, timestart, timeend, id_lecturer, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [subject, classes, room, timestart, timeend, id_lecturer, new Date(), new Date()];

  connection.query(sql, values, (err, result) => {
    console.log('err', err);
    console.log('result', result);
    if (err) {
      //   res.send(err);
      res.status(400).json({
        message: err,
      });
      return;
    }
    res.status(200).json({
      message: 'Đã tạo thời khóa biểu thành công!',
    });
    // res.send('Đã tạo thời khóa biểu thành công!');

    // res.redirect('/create-timetable'); // Chuyển hướng sau khi lưu dữ liệu
  });
};

module.exports = {
  getHomePage,
  createtimetable,
  createAtimetable,
};

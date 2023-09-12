require('dotenv').config();
import db from '../models';
import { connection } from '../config/connectDB';
const jwt = require('jsonwebtoken');
let getHomePage = (req, res) => {
  console.log('gethomepage');
  return res.render('index.ejs');
};
let login = (req, res) => {
  console.log('login');
  return res.render('login.ejs');
};
// let lecturelist = (req, res) => {
//   console.log('lecturelist');
//   connection.query('select * from `lecturers`', function (err, results, fields) {
//     let data = results.map((row) => row);
//     console.log(data);
//     return res.render('lecturer.ejs', { dataUser: JSON.stringify(data) });
//   });
// };
let lecturelist = (req, res) => {
  console.log('lecturelist');
  let data = [];
  connection.query('select * from `lecturers`', function (err, results, fields) {
    results.map((row) => {
      data.push({
        id: row.id,
        email: row.email,
        address: row.address,
        firstname: row.firstName,
        lastname: row.lastName,
      });
    });
    // console.log('data');
    // console.log(data);
    return res.render('lecturer.ejs', { dataUser: JSON.stringify(data) });
  });
};
let lecturelistjson = (req, res) => {
  console.log('lecturelist');
  let data = [];
  connection.query('select * from `lecturers`', function (err, results, fields) {
    results.map((row) => {
      data.push({
        id: row.id,
        email: row.email,
        address: row.address,
        firstname: row.firstName,
        lastname: row.lastName,
      });
    });
    // console.log('data');
    // console.log(data);
    return res.status(200).json({ data });
  });
};
let createlecturer = (req, res) => {
  console.log('createlecturer');
  return res.render('createlecturer.ejs');
};
let createAlecturer = (req, res) => {
  console.log('createlecturer');
  const formData = req.body;

  const newLecturer = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    phone: formData.phone,
    username: formData.username,
    password: formData.password,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  console.log(newLecturer);
  // Thêm thông tin giáo viên vào cơ sở dữ liệu
  connection.query('INSERT INTO lecturers SET ?', newLecturer, (err, result) => {
    if (err) {
      console.error('Lỗi thêm giáo viên:', err);
      res.send('Có lỗi xảy ra khi thêm giáo viên');
    } else {
      console.log('Đã thêm giáo viên:', result);
      res.send('Thêm giáo viên thành công');
    }
  });
  // return res.render('createlecturer.ejs');
};

let editlecturer = (req, res) => {
  console.log('editlecture');
  const lecturerId = req.params.id;

  connection.query('SELECT * FROM lecturers WHERE id = ?', [lecturerId], (err, results) => {
    if (err) {
      console.error('Lỗi khi truy vấn cơ sở dữ liệu:', err);
      return res.status(500).json({ message: 'Lỗi khi truy vấn cơ sở dữ liệu' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Không tìm thấy giáo viên' });
    }

    const lecturer = results[0];
    res.render('editlecturer.ejs', { lecturer });
  });
};
let deletelecturer = (req, res) => {
  console.log('deletelecturer');
  const lecturerId = req.params.id;
  console.log(lecturerId);

  connection.query('DELETE FROM lecturers WHERE id = ?', [lecturerId], (err, results) => {
    if (err) {
      console.error('Lỗi khi truy vấn cơ sở dữ liệu:', err);
      return res.status(500).json({ message: 'Lỗi id này đã được sử dụng ở bảng khác' });
    }

    res.json({ message: 'Xoá giáo viên thành công' });
  });
};
let savelecturer = (req, res) => {
  console.log('savelecturer');
  const lecturerId = req.params.id;
  const { firstName, lastName, email, phone, username, password } = req.body;
  console.log(firstName, lastName, email, phone, username, password, lecturerId);
  const updateQuery =
    'UPDATE lecturers SET firstName = ?, lastName = ?, username = ?, password=?, email = ?, phone = ? WHERE id = ?';
  const values = [firstName, lastName, username, password, email, phone, lecturerId];
  console.log(updateQuery);
  connection.query(updateQuery, values, (err, results) => {
    if (err) {
      console.error('Lỗi khi truy vấn cơ sở dữ liệu:', err);
      return res.status(500).json({ message: 'Lỗi khi truy vấn cơ sở dữ liệu' });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Không tìm thấy giáo viên' });
    }

    res.json({ message: 'Sửa thông tin giáo viên thành công' });
  });
};
const postlogin = async (req, res) => {
  console.log('postlogin');
  console.log(req.params);
  const { username, password } = req.body;
  console.log(username, password);
  if (!username || !password)
    return res.status(400).json({
      errCode: 2,
      message: 'Missing username and/or password',
    });
  try {
    // const data = await db.department.findOne({
    //   where: {
    //     username,
    //   },
    // });
    // console.log(data);

    const sql = 'SELECT * FROM departments WHERE username = ?';
    connection.query(sql, [username], (err, results) => {
      if (results.length === 0)
        return res.status(401).json({ status: false, message: 'Username incorrect' });
      else {
        const sql = 'SELECT * FROM departments WHERE username = ? AND password =?';
        connection.query(sql, [username, password], (err, results) => {
          if (results.length === 0)
            return res.status(401).json({ status: false, message: 'Password incorrect' });
          else {
            const accesstoken = jwt.sign(
              { userID: results[0].id },
              process.env.ACCESS_TOKEN_SECRET,
            );
            console.log(accesstoken);
            return res.status(200).json({ status: true, message: 'Success', accesstoken });
          }
        });
      }
    });

    // if (!data)
    //   return res.status(400).json({
    //     errCode: 3,
    //     message: 'Incorrect username',
    //   });
    // const passwordconfirm = await argon2.verify(data.password, password);
    // if (!passwordconfirm)
    //   return res.status(401).json({
    //     errCode: 0,
    //     message: 'Incorrect password',
    //   });

    // const accesstoken = jwt.sign({ userID: data.id }, process.env.ACCESS_TOKEN_SECRET);
    // res.status(200).json({
    //   errCode: 0,
    //   message: 'User logged in successfully',
    //   accesstoken,
    // });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      errCode: 1,
      message: 'Internal server error',
    });
  }
};
module.exports = {
  getHomePage,
  login,
  postlogin,
  lecturelist,
  lecturelistjson,
  editlecturer,
  savelecturer,
  deletelecturer,
  createlecturer,
  createAlecturer,
};

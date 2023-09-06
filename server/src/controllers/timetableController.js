import db from '../models';
import { connection } from '../config/connectDB';
let timetableindexget = (req, res) => {
  console.log('timetableindexget');

  const sql = `
    SELECT
      timetables.id,
      timetables.subject,
      timetables.classes,
      timetables.room,
      timetables.timestart,
      timetables.timeend,
      CONCAT(lecturers.firstname, ' ', lecturers.lastname) AS lecturer
    FROM
      timetables
    JOIN
      lecturers ON timetables.id_lecturer = lecturers.id
  `;

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying timetable:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    // console.log(results);
    // res.json(results);
    return res.status(200).json({ results });
    // return res.render('timetable/timetablelist.ejs', { datatimetable: JSON.stringify(results) });
  });
};
let timetablelist = (req, res) => {
  console.log('timetablelist');

  const sql = `
    SELECT
      timetables.id,
      timetables.subject,
      timetables.classes,
      timetables.room,
      timetables.timestart,
      timetables.timeend,
      CONCAT(lecturers.firstname, ' ', lecturers.lastname) AS lecturer
    FROM
      timetables
    JOIN
      lecturers ON timetables.id_lecturer = lecturers.id
  `;

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying timetable:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    // console.log(results);
    // res.json(results);
    return res.render('timetable/timetablelist.ejs', { datatimetable: JSON.stringify(results) });
  });
};
let timetableindex = (req, res) => {
  console.log('timetableindex');
  return res.render('timetable/timetable.ejs');
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

// Route để hiển thị biểu mẫu chỉnh sửa thời khóa biểu
let edittimetable = (req, res) => {
  const timetableId = req.params.id;
  // Truy vấn thông tin thời khóa biểu dựa trên timetableId từ cơ sở dữ liệu
  const sql = 'SELECT * FROM timetables WHERE id = ?';
  connection.query(sql, [timetableId], (err, results) => {
    if (err) {
      console.error('Error querying timetable:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    // Nếu không tìm thấy thời khóa biểu, có thể xử lý và hiển thị thông báo lỗi
    if (results.length === 0) {
      res.status(404).send('Thời khóa biểu không tồn tại');
      return;
    }

    const timetable = results[0];
    res.render('timetable/edit-timetable.ejs', { timetableId, timetable });
  });
};

// Route để xử lý yêu cầu POST từ biểu mẫu chỉnh sửa thời khóa biểu
let savetimetable = (req, res) => {
  console.log('savetimetable');
  const timetableId = req.params.id;
  console.log(timetableId);
  const { subject, classes, room, timestart, timeend, id_lecturer } = req.body;
  console.log(req.body);
  // Thực hiện cập nhật thông tin thời khóa biểu trong cơ sở dữ liệu
  const sql =
    'UPDATE timetables SET subject=?, classes=?, room=?, timestart=?, timeend=?, id_lecturer=? WHERE id=?';
  connection.query(
    sql,
    [subject, classes, room, timestart, timeend, id_lecturer, timetableId],
    (err, results) => {
      if (err) {
        console.error('Error updating timetable:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
        // return;
      }

      // Xử lý thành công và chuyển hướng hoặc hiển thị thông báo thành công
      return res.status(200).json({ message: 'Success' });
      //   res.redirect('/timetable'); // Chuyển hướng đến danh sách thời khóa biểu hoặc trang khác
    },
  );
};

let deletetimetable = (req, res) => {
  console.log('deletetimetable');
  const timetableId = req.params.id;
  console.log(timetableId);

  // Thực hiện xóa thời khóa biểu dựa trên timetableId từ cơ sở dữ liệu
  const sql = 'DELETE FROM timetables WHERE id = ?';
  connection.query(sql, [timetableId], (err, results) => {
    if (err) {
      console.error('Error deleting timetable:', err);
      return res.status(500).json({ message: 'Internal Server Error' });
      return;
    }

    // Xử lý thành công và chuyển hướng hoặc hiển thị thông báo thành công
    return res.status(200).json({ message: 'Success' });
    res.redirect('/timetable'); // Chuyển hướng đến danh sách thời khóa biểu hoặc trang khác
  });
};

module.exports = {
  timetablelist,
  createtimetable,
  createAtimetable,
  edittimetable,
  savetimetable,
  deletetimetable,
  timetableindex,
  timetableindexget,
};

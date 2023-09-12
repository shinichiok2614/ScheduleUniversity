import { connection } from '../config/connectDB';

let getStaffById = (req, res) => {
  console.log('getStaffById');
  const id = req.params.id;

  // Truy vấn cơ sở dữ liệu để lấy thông tin nhân viên
  const sql = 'SELECT * FROM staff WHERE id = ?';
  connection.query(sql, [id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Lỗi trong quá trình truy vấn cơ sở dữ liệu.' });
    }

    // Kiểm tra xem có dữ liệu nhân viên hay không
    if (results.length === 0) {
      return res.status(404).json({ error: 'Không tìm thấy nhân viên với id đã cung cấp.' });
    }

    // Trả về thông tin nhân viên dưới dạng JSON
    const staff = results[0];
    res.status(200).json(staff);
  });
};
// app.post('/staff', (req, res) => {
let staffinsert = (req, res) => {
  console.log('staffinsert');
  const { firstname, lastname, username, password } = req.body;
  const sql = 'INSERT INTO staff (firstname, lastname, username, password) VALUES (?, ?, ?, ?)';
  connection.query(sql, [firstname, lastname, username, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json('Lỗi trong quá trình thêm nhân viên.');
    } else {
      res.status(200).json('Thêm nhân viên thành công.');
    }
  });
};

// Sửa thông tin nhân viên theo ID
// app.put('/staff/:id', (req, res) => {
let staffsave = (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, username, password } = req.body;
  const sql = 'UPDATE staff SET firstname=?, lastname=?, username=?, password=? WHERE id=?';
  connection.query(sql, [firstname, lastname, username, password, id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json('Lỗi trong quá trình sửa thông tin nhân viên.');
    } else {
      res.status(200).json('Sửa thông tin nhân viên thành công.');
    }
  });
};

// Xoá nhân viên theo ID
// app.delete('/staff/:id', (req, res) => {
let staffdelete = (req, res) => {
  console.log('staffdelete');
  const { id } = req.params;

  const sql = 'DELETE FROM staff WHERE id=?';
  connection.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json('Lỗi trong quá trình xoá nhân viên.');
    } else {
      res.status(200).json('Xoá nhân viên thành công.');
    }
  });
};

// Đọc danh sách nhân viên
// app.get('/staff', (req, res) => {
let staffread = (req, res) => {
  console.log('staffread');
  const sql = 'SELECT * FROM staff';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Lỗi trong quá trình đọc danh sách nhân viên.');
    } else {
      res.status(200).json(results);
    }
  });
};

let staffreadview = (req, res) => {
  console.log('staffreadview');
  return res.render('staff/listStaff.ejs');
};

let staffinsertview = (req, res) => {
  console.log('staffinsertview');
  return res.render('staff/addStaff.ejs');
};

let staffeditview = (req, res) => {
  const id = req.params.id;
  console.log('staffeditview');
  return res.render('staff/editStaff.ejs', { id });
};

module.exports = {
  getStaffById,
  staffread,
  staffsave,
  staffinsert,
  staffdelete,
  staffreadview,
  staffinsertview,
  staffeditview,
};

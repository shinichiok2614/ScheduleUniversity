import { connection } from '../config/connectDB';

let roomlistview = (req, res) => {
  return res.render('room/room.ejs');
};

let roomlist = (req, res) => {
  console.log('roomlist');
  // Truy vấn cơ sở dữ liệu để lấy danh sách các phòng
  const sql = 'SELECT * FROM room';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Lỗi trong quá trình truy vấn cơ sở dữ liệu.' });
    }

    // Trả về danh sách các phòng dưới dạng JSON
    res.status(200).json(results);
  });
};

//loi roomupdate
let roomupdate = (req, res) => {
  console.log('roomupdate');
  const id = req.params.id;
  const { name } = req.body;
  // Truy vấn cơ sở dữ liệu để cập nhật thông tin phòng
  const sql = 'UPDATE room SET name = ? WHERE id = ?';
  connection.query(sql, [name, id], (err, results) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ success: false, error: 'Lỗi trong quá trình cập nhật thông tin phòng.' });
    }

    // Kiểm tra xem có bao nhiêu bản ghi đã được cập nhật (0 hoặc 1)
    if (results.affectedRows === 0) {
      return res
        .status(404)
        .json({ success: false, error: 'Không tìm thấy phòng với id đã cung cấp.' });
    }

    // Trả về kết quả thành công
    res.status(200).json({ success: true, message: 'Cập nhật thông tin phòng thành công.' });
  });
};

const roomdelete = (req, res) => {
  const roomId = req.params.id;

  // Thực hiện truy vấn DELETE vào cơ sở dữ liệu
  const sql = 'DELETE FROM room WHERE id = ?';
  connection.query(sql, [roomId], (err, result) => {
    if (err) {
      console.error('Lỗi trong quá trình xoá phòng: ' + err.message);
      res.json({ success: false, error: 'Lỗi trong quá trình xoá phòng.' });
    } else {
      console.log(`Phòng có ID ${roomId} đã được xoá.`);
      res.json({ success: true, message: 'Xoá phòng thành công.' });
    }
  });
};

const roomadd = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  // Thực hiện truy vấn SQL để thêm phòng mới
  const sql = `INSERT INTO room (id, name) VALUES (?, ?)`;
  connection.query(sql, [id, name], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false, error: 'Lỗi trong quá trình thêm phòng.' });
    }

    return res.status(200).json({ success: true, message: 'Thêm phòng thành công.' });
  });
};

module.exports = {
  roomlist,
  roomlistview,
  roomupdate,
  roomdelete,
  roomadd,
};

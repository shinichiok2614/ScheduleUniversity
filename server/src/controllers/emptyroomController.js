import { connection } from '../config/connectDB';

let emptyroom = (req, res) => {
  // Truy vấn SQL để lấy danh sách các phòng chưa được sử dụng
  const sqlQuery = `
        SELECT room.name
        FROM room
        LEFT JOIN timetables ON room.id = timetables.room
        WHERE timetables.room IS NULL;
    `;

  connection.query(sqlQuery, (err, results) => {
    if (err) {
      console.error('Error querying empty rooms:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    // Chuyển danh sách các phòng chưa được sử dụng sang emptyroom.ejs
    res.render('emptyroom/emptyroom.ejs', { rooms: results });
  });
};
module.exports = {
  emptyroom,
};

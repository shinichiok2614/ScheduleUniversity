import { connection } from '../config/connectDB';
let departmentlist = (req, res) => {
  console.log('departmentlist');
  const sql = 'SELECT DISTINCT department FROM lecturers';
  connection.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    const departments = result.map((row) => row.department);
    console.log(departments);
    res.json(departments);
  });
};
let classeslist = (req, res) => {
  console.log('classeslist');
  const sql = 'SELECT DISTINCT classes FROM timetables';
  connection.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    const departments = result.map((row) => row.classes);
    console.log(departments);
    res.json(departments);
  });
};
module.exports = {
  departmentlist,
  classeslist,
};

import mysql from 'mysql2';
const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('schedule', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});
//logging xoa select 1+1
let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'schedule',
});
// connection.query('select * from `lecturers`', function (err, results, fields) {
//   // console.log(result);
//   // console.log(fields);
//   let rows = results.map((row) => row.id);
//   console.log(rows)
// });

export default connectDB;

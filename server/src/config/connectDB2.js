import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'schedule',
});

connection.connect((err) => {
  if (err) {
    console.log('Connect error', err);
    return;
  }
  console.log('Connect success');
});

//test
// connection.query(
//     'select * from student',
//     function (err, result, fields) {
//         console.log(result)
//         console.log(fields)
//     }
// )

// export default connection;

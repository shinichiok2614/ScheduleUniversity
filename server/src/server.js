import express from 'express';
import initRoute from './routes/route';
import connectDB from './config/connectDB';
import authRoute from './routes/auth';
import configViewEngine from './config/viewEngine';
import bodyParser from 'body-parser';

let app = express();
// app.use(express.json());
connectDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
configViewEngine(app);
initRoute(app);
// app.get('/', (req, res) => {
//   console.log('/');
//   res.render('index.ejs');
// });
app.get('/about', (req, res) => {
  res.send('about');
});
// app.use('/auth', authRoute);


// Xử lý route POST từ form
// app.post('/save-lecturer/:id', (req, res) => {
//   const lecturerId = req.params.id;
//   const formData = req.body;

//   const firstName = formData.firstName;
//   const lastName = formData.lastName;
//   const username = formData.username;
//   const password = formData.password;
//   const email = formData.email;
//   const phone = formData.phone;
//   console.log(formData);
//   // Tiến hành xử lý dữ liệu theo yêu cầu của bạn
//   // Ví dụ: Lưu dữ liệu vào cơ sở dữ liệu

//   // Trả về phản hồi cho máy khách
//   res.send('Dữ liệu đã được xử lý thành công');
// });

let port = 8080;
app.listen(port, () => {
  console.log('Backend NodeJS is running on the port: ', port);
});

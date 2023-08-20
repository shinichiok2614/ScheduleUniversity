login
register


npx sequelize-cli init
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
npx sequelize-cli db:migrate
npx sequelize-cli seed:generate --name demo-user
npx sequelize-cli db:seed:all

//student
//tạo file model
npx sequelize-cli model:generate --name student --attributes firstName:string,lastName:string,email:string,username:string,password:string,phone:string,email:string,age:integer,address:string,class:string,army_rank:string,avatar:string
//tạo model trong sql
npx sequelize-cli db:migrate
//tạo file seed demo student
npx sequelize-cli seed:generate --name demo-student
//tạo demo student trong sql
npx sequelize-cli db:seed:all

200 - Everything is OK
201 - Created Successfully
202 - Accepted
204 - No Content
301 - Moved Permanently
400 - Bad Request
401 - Unauthorized
404 - Not Found
500 - Internal Server Error

"powermode.explosions.customExplosions": [
"https://media.giphy.com/media/KFhi16VKwyBV0rSwZd/giphy.gif"
// "https://media.giphy.com/media/1180R0BKLPHsLS/giphy.gif"
// "https://media.giphy.com/media/YjfFCvd5UrcRO/giphy.gif"
// "https://media.giphy.com/media/SaSAUwiGPsPtswfPRk/giphy.gif",
// "https://media0.giphy.com/media/SV0LuYdSMmKEklpZKs/giphy.gif?cid=ecf05e47sizdj8hx13fnw3jkp87xzb26rr366xnpntrwfkq1&ep=v1_stickers_search&rid=giphy.gif&ct=s"
],

nhược:
lưu token trên localstorage->cookie mới đúng

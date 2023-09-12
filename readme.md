npx sequelize-cli init
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
npx sequelize-cli db:migrate
npx sequelize-cli seed:generate --name demo-user
npx sequelize-cli db:seed:all
https://www.youtube.com/watch?v=B4sy3DL4IX0&list=PLncHg6Kn2JT6E38Z3kit9Hnif1xC_9VqI&index=30
18:44

?: nếu được hỏi tại sao k login vẫn truy cập được trang admin?
-> vì server được làm kiểm server-rendering nên khi render sẽ không dùng api mà dùng res.render vì thế không verify được token, chỉ verify được token khi sử dụng api để post, khi đó header sẽ có trường authorization

?: tại sao lại dùng localStorage để lưu token?
-> vì sự đơn giản của nó trong môi trường dev, còn nếu đúng yêu cầu bảo mật phải lưu trong cookie và kèm theo 1 khoảng thời gian đủ nhỏ

?: trong file route.js những dòng có verifytoken là những liên kết được bảo vệ bởi token, phải login mới có quyền can thiệp

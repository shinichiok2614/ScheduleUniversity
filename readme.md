npx sequelize-cli init
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
npx sequelize-cli db:migrate
npx sequelize-cli seed:generate --name demo-user
npx sequelize-cli db:seed:all
https://www.youtube.com/watch?v=B4sy3DL4IX0&list=PLncHg6Kn2JT6E38Z3kit9Hnif1xC_9VqI&index=30
18:44

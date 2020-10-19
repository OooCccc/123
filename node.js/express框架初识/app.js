// 1.引入express
const express = require("express");
// 2.创建对象
const app = express();
// 3.创建路由规则
app.get("/", (resquest, response) => {
  //设置响应体
  response.send("你好 express!");
});
app.get("/about", (resquest, response) => {
  //设置响应体
//   response.end("你好 express!!!!!!!!");//会乱码
  response.send("你好 express!!!!!!!!");
});
//4.监听端口启动服务
app.listen(10086, () => {
  console.log("服务已经启动,8000端口监听中......");
});

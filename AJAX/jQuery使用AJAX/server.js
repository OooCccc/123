// 1.引入express
const express = require("express");
// 2.创建对象
const app = express();
// 3.创建路由规则
app.get("/server-ajax", (resquest, response) => {
    //设置响应头允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    //设置响应体
    const data={
        name:"AJAX你好！",
        age:16
    }
    response.send(JSON.stringify(data));
});
app.post("/server-ajax", (resquest, response) => {
    //设置响应头允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    //设置响应体
    response.send("post请求！");
});
app.all("/server-ajax", (resquest, response) => {
    //设置响应头允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    //设置响应体
    response.send("AJAX通用请求！");
});

//axios-get
app.all("/server-axios-get",(resquest,response)=>{
    //设置响应头允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    //设置响应体
    response.send("axios-AJAX-get");
})
//axios-post
app.all("/server-axios-post",(resquest,response)=>{
    //设置响应头允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    //设置响应体
    response.send("axios-AJAX-post");
})
//axios通用
app.all("/server-axios",(resquest,response)=>{
    //设置响应头允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    //设置响应体
    // setTimeout(() => {
        const data={
            name:`dj`,
            age:124
        }
        response.send(JSON.stringify(data));
    // }, 3000);
})
//fetch
app.all("/server-fetch",(resquest,response)=>{
    //设置响应头允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    //设置响应体
    // setTimeout(() => {
        const data={
            name:`dj`,
            age:11111111111
        }
        response.send(JSON.stringify(data));
    // }, 3000);
})
//4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动,8000端口监听中......");
});

// 1. 引入express
const  express=require("express");
// 2.创建对象
    const app=express();
// 3.创建路由规则 
// request(请求报文的封装)
// response(相应报文的封装)
    app.get("/server",(request,response) =>{
        // 设置响应头(允许跨域)
        response.setHeader("Access-Control-Allow-Origin","*")
        // 设置响应体
        response.send("你好AJAX！get请求");

    } );
    app.post("/server",(request,response) =>{
        // 设置响应头(允许跨域)
        response.setHeader("Access-Control-Allow-Origin","*")
        // 设置响应体
        response.send("你好AJAX！post请求");

    } );
    // 4.监听端口启动服务
    app.listen(8000,()=>{
        console.log('服务已经启动,8000端口监听中......');
    })

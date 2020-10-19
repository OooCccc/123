//引入http模块
const http=require("http");
//创建http实例
const  server= http.createServer();
//请求事件处理,须要接受两个参数request response
server.on("request",function(request,response){
    console.log("收到客户端的请求了！,请求路径是:"+request.url);
    response.write("nice地方!");
    response.end("end!")
});

//监听端口10086
server.listen(10086,function(){
console.log("服务启动成功，10086端口监听中........");
})
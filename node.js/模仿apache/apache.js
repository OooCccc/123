//引入http核心模块
const http = require("http");

//引入fs核心模块
const fs = require('fs');
//创建一个http实例

const server = http.createServer();


var wwwDir = "E:/前端自学/node.js/模仿apache/www";
//请求使事件处理
server.on("request", function (request, response) {
    //如果要进行汉字的响应，必须对响应进行设置字符编码；
    // response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码
    // response.end("<h1>测试成功！</h1>");
    //设置主页
    var filePath = "/index.html";
    //获取路劲
    var url = request.url;

    if (url !== '/') {
        filePath = url;
    }
    //读取路径下的文件
    fs.readFile(wwwDir + filePath, function (error, data) {
        if (error) {
            response.writeHead(404, {'Content-Type': 'text/html'});//设置response编码
            return response.end(`<h1 style="color:red; text-align:center;" >Not found 404!</h1>`);
        }
        response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });//设置response编码
        response.end(data);

    });



    // console.log("我的路径是："+wwwDir+filePath);
    // response.end("1");

});

//监听10086端口
server.listen("10086", function () {
    console.log("10086 port is runnig!....");

})
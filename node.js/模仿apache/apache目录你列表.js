    //引入http核心模块
const http = require("http");

//引入fs核心模块
const fs = require('fs');
const { time } = require("console");
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
    // fs.readFile(wwwDir + filePath, function (error, data) {
    //     if (error) {
    //         response.writeHead(404, {'Content-Type': 'text/html'});//设置response编码
    //         return response.end(`<h1 style="color:red; text-align:center;" >Not found 404!</h1>`);
    //     }
    //     response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });//设置response编码
    //     response.end(data);
    // });

    fs.readdir(wwwDir,function(error,file){
    if(error){
            return response.end(`<h1 style="color:red; text-align:center;" >Not found 404!</h1>`);
        }
        response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });//设置response编码

        //处理数据（目录）
        // 将目录循环遍历到html，在响应给客户端
        fs.readFile(wwwDir+filePath,function(error,data){
            console.log(wwwDir+filePath);
                if(error){
                    return response.end(`<h1 style="color:red; text-align:center;" >Not found 404!11111</h1>`);
                }
        //读取道德html文件
                data=data.toString();
         // 将目录循环遍历到html，在响应给客户端
         var content='';
         file.forEach(item => {
             content+=`
            <tr>
                <td>
                        ${item}/
                </td>
                <td>
                    文件大小
                </td>
                <td>
                    文件修改日期
                </td>
            </tr>`
         });
         
         data=data.replace('dj11111',content);
         response.end(data);
         
        });

    
    });



});

//监听10086端口
server.listen("10086", function () {
    console.log("10086 port is runnig!....");

})
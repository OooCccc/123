//引入http核心模块
const http = require('http');   

//引入fs核心模块
const fs = require('fs');

//引入模板引擎模块
const template = require('art-template');


//创建http实例
const server=http.createServer();

//请求事件处理
server.on("request",function(reqrest,response){

//读取文件
fs.readFile("../模仿apache/www/apache2.html",function(error,data){
    if(error){
            return response.end('Not found 404!');
    }
    fs.readdir("E:/前端自学/node.js/模仿apache/www",function(error,flie){
        if(error){
            return response.end("Not Found Dir!");
        }
        //用模板引擎对数据进行处理
    var htmlStr=template.render(data.toString(),{
        title:'node.js你好！',
        flie:flie
    });
    response.end(htmlStr);
    
    });

});



});


//监听端口
server.listen("10086",function(){
    console.log('10086 prot is running.....');
    
});
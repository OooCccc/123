const http = require('http');

const url = require('url');
 
 http.createServer(function(req,res){
    //获取请求路径  /****** 
    var path=req.url;
    // 获取参数
    var params=url.parse(path,true).query;
    console.log(params.a,params.b);
    res.end("hello"+url.parse(path,true).pathname);
 }).listen('10086',function(){
 console.log('10086 prot is running!......');
 
 });
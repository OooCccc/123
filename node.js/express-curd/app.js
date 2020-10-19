//1.引入express 
const express = require('express');
//2.引入art-template
const template = require('art-template');
//3.引入文件操作模块
const fs = require('fs');
//4.引入psot参数获取模块（body-parser）
const bodyParser= require('body-parser');
//加载路由模块
const router = require('./router');

const app=express();

//开放静态资源
app.use("/public",express.static('public'));
app.use("/node_modules",express.static('node_modules'));

//配置模板引擎
app.engine('html', require('express-art-template'));
//更改模板字符的路径
// app.set('views', './view');


// 配置body-parser
// 只要加入这个配置，则在req请求对象上会多出来一个属性：body
// 也就是说可以直接通过req.body来获取表单post请求数据
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// router(app);
// 把路由容器挂载到app服务中
// 挂载路由
app.use(router);

app.listen(10086,function(){
    console.log("10086 port is runnng!......");
});

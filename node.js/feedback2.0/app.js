const express = require('express');

const fs = require("fs");

const template = require('art-template');

const app = express();


var comment = [
    {
        name: "张三",
        content: "你好！",
        time: "2020-09-24 13:24:20"
    }, {
        name: "张三1",
        content: "你好!！",
        time: "2020-09-24 13:24:20"
    }, {
        name: "张三2",
        content: "你好!!！",
        time: "2020-09-24 13:24:20"
    }, {
        name: "张三3",
        content: "你好!!!！",
        time: "2020-09-24 13:24:20"
    }, {
        name: "张三4",
        content: "你好!!!！",
        time: "2020-09-24 13:24:20"
    }
];

//加载静态资源
app.use("/public", express.static("public"));

    // 配置模板引擎art-template
    app.engine('html', require('express-art-template'));
    //更改模板字符的路径
    app.set('views', './view');
    // routes
    app.get('/', function (req, res) {
        res.render('index.html',{
            comment:comment
        });
     
        
    });


app.get('/post', function (req, res) {
    res.render('post.html');
    
});


app.get("/comments", (req, res) => {
    //获取参数数组
    
    var params = req.query;
    params = JSON.stringify(params);
    params = JSON.parse(params);

    comment.unshift(params);
    // 获取评论的时间
    var time2 = Date.now();
    var date = new Date(time2);
    var dt = date.getFullYear() + "-" + (date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    params.time = dt;

    //重构定向到主页
    res.redirect("/");
});

//监听10086端口
app.listen(10086, function () {
    console.log("10086 port is running !..........");

});

const http = require("http");

const fs = require("fs");

const url = require('url');

const template = require('art-template');

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
    }];
http
    .createServer(function (res, req) {

        var path1 = res.url;
        path = url.parse(path1, true).pathname;

        if (path === "/" || path === '/index.html') {

            fs.readFile("./view/index.html", function (err, data) {
                if (err) {
                    return req.end(
                        `<h1 style="color:red; text-align:center;"> Not Found 404!</h1>`
                    );
                }
                console.log(comment);

                var htmlStr = template.render(data.toString(), comment);

                req.end(htmlStr);
            });
        } else if (path === '/post') {
            fs.readFile('./view/post.html', function (err, data) {
                if (err) {
                    return req.end(
                        `<h1 style="color:red; text-align:center;"> Not Found rescoure!</h1>`
                    );
                } else {
                    req.end(data);
                }
            });
        } else if (path === '/comments') {
            //获取参数数组
            var params = url.parse(path1, true).query;
            // req.end(JSON.stringify(params));

            //当出现[Object: null prototype]我们可以先对对象进行JSON字符串转化(JSON.stringify())，然后再转化成对象(JSON.parse())，这样就可以去除了（以下方法对遇到[Object: null prototype]都通用）：
            params = JSON.stringify(params);
            params = JSON.parse(params);
            comment.unshift(params);
            console.log(comment);


            // 获取评论的时间
            var time2 = Date.now();
            var date = new Date(time2);
            var dt = date.getFullYear() + "-" + (date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            params.time = dt;

            //重构定向到主页
            req.statusCode = 302;
            req.setHeader('Location', '/');
            req.end();



        } else if (path.indexOf('/public/') === 0) {
            fs.readFile('.' + path, function (err, data) {
                if (err) {
                    return req.end(
                        `<h1 style="color:red; text-align:center;"> Not Found rescoure!</h1>`
                    );
                } else {
                    req.end(data);
                }
            });
        } else {
            fs.readFile('./view/404.html', function (error, data) {
                if (error) {
                    res.end("呵呵，404都没有");
                } else {
                    req.end(data);
                }
            });

        }

    })
    .listen("10086", function () {
        console.log("10086 port is running!...");
    });

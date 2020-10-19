//路由模块
/**
 * router.js路由模块
 * 职责：
 *      处理路由
 *      根据不同的请求方法+请求路径设置具体的请求函数
 * 模块职责要单一，我们划分模块的目的就是增强代码的可维护性，提升开发效率
 */

//方法一:使用module.exprots来导出路由
/* module.exports=function(app){

//主页
app.get("/",function(req,res){


});

//添加学生页面
app.get("/student/new",function(req,res){

});
//处理添加学生页面
app.post("/student/new",function(req,res){

});

//学生信息编辑页面
app.get("/student/edit",function(req,res){

//处理学生信息编辑页面
});
app.post("/student/edit",function(req,res){

//处理删除请求
});
app.get("/student/delete",function(req,res){


});





} */

//方法二:使用express提供的方法来导出路由

//引入express框架
const express = require("express");
//引入fs模块
const fs = require("fs");
//创建一个路由容器
const router = express.Router();
//将路由挂在到容器中
const Student = require("./student");

//主页
router.get("/", function (req, res) {
  //调用student
  Student.find(function (err, data) {
    res.render("index.html", {
      student: data,
    });
  });
});
//添加学生页面
router.get("/student/new", function (req, res) {
  fs.readFile("./views/add.html", function (err, data) {
    if (err) {
      return res.status(400).send("not found 404!");
    }
    res.render("add.html");
  });
});
//处理添加学生页面
router.post("/student/new", function (req, res) {
  //1.获取信息
  Student.save(req.body, function (err) {
    if (err) {
      return res.status(500).send("server error");
    } else {
      res.redirect("/");
    }
  });
});

//学生信息编辑页面
router.get("/student/edit", function (req, res) {
      fs.readFile("./views/modfi.html",function(err,data){
        if(err){
            return res.send("not found 404!");
        }else{

          Student.findStudnetById(req.query.id,function(err,data){

            if (err) {
              return res.status(400).send("not found 404!");
            }
            
            res.render("modfi.html",{
              modStudnet:data
            });
          
          });
          
        }
      
      });


  //处理学生信息编辑页面
});
router.post("/student/edit", function (req, res) {
  console.log(req.body);
  
  Student.update(
      req.body
  ,function(err){
      if (err) {
          return res.status(500).send("server error");
        } else {
          res.redirect("/");
        }
  });
 
});

 //处理删除请求
router.get("/student/delete", function (req, res) {
Student.delete({
  id:req.query.id,
},function(err){
  if (err) {
      return res.status(500).send("server error");
    } else {
      res.redirect("/");
    }
});


});

//导出路由
module.exports = router;

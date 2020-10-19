/**
 * student.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 */
const fs = require('fs');

//导入mongoose模块

const mongoose = require('mongoose');
//连接数据库
mongoose.connect("mongodb://localhost/student",{useNewUrlParser:true,useUnifiedTopology:true},function(err){
if(err){
    console.log("errro!");
}else
{
    console.log("数据库连接成功！");
}
});
//获取shecma
const Schema = mongoose.Schema;
//设计表的结构
const  student=new Schema({
    name:{
        type:String,
        equired:true
    },
    gender:{
        type:Number,
        equired:true
    },
    age:{
        type:Number,
        equired:true
    },
    hobbies:{
        type:String
    }
});
//获取表的模型构造器  直接导出
module.exports=mongoose.model("Student",student);

// const cat=new Student({
//     name:"dj",
//     gender:0,
//     age:10,
//     hobbies:"篮球,足球,乒乓球"
// });


//引入fs文件系统模块
var fs=require("fs");

//读取文件(异步读取)
fs.readFile("hello.txt",function(error,data){
    console.log(error);
    console.log(data.toString());
});
//写入文件(异步写入)
fs.writeFile("hello.md","你好！我是node.js！，这个文件的类型是md！",function(error){
console.log(error);
console.log("文件写入成功！");

});
//读取文件
fs.readFile("hello.md",function(error,data){
    console.log(data.toString());
});
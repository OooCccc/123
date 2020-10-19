/**
 * student.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 */
const fs = require('fs');

 /**
  * 
  * 获取所有学生列表
  * return []
  */
 exports.find=function(callback){
    fs.readFile("db.json",function(err,data){
        if(err){
            return callback(err);
        }
        return callback(null,JSON.parse(data.toString()).student)
    });
 }
 /**
  * 
  * 保存学生信息
  * 
  */
 exports.save=function(student,callback){
        //1.读取文件
        fs.readFile("db.json",function(err,data){
            if(err){
                return callback(err);
            }
        //2.将读出来的数据转化为对象 在获取student数组
            data=JSON.parse(data.toString()).student;

        //3.id问题
            student.id=data[data.length -1].id+1;
            console.log(typeof  student.id);
            
            student.hobbies=student.hobbies.toString();
            student.gender=Number(student.gender);
            student.age=Number(student.age);

                //4.将信息放入数组中
            data.push(student);
        //5.将数组对象转化为字符串
            var fileData=JSON.stringify({
                student:data
            })
        //6.将字符串写入文件中
            fs.writeFile('db.json',fileData,function(err){
                if(err){
                    return callback(err);
                }else{
                    return callback(null);
                }

        });
  
            });
 
 }
 
 /**
  * 
  * 更新学生信息
  * 
  */
 exports.update=function(student,callback){

    fs.readFile("db.json",function(err,data){
            if(err){
                    return callback(err);
            }else{
                //2.将读出来的数据转化为对象 在获取student数组
            data=JSON.parse(data.toString()).student;
                    
            var modStudent=data.find(function(item){
                    return item.id==student.id;
            });

            //修改对象的信息
            for(var  key in modStudent){
                modStudent[key]=student[key];
            }

    
            //5.将数组对象转化为字符串
                var fileData=JSON.stringify({
                    student:data
                })
            //6.将字符串写入文件中
                fs.writeFile('db.json',fileData,function(err){
                    if(err){
                        return callback(err);
                    }else{
                        return callback(null);
                    }
    
            });

            }

    });


 
 }
 /**
  * 
  * 删除学生信息
  * 
  */
 exports.delete=function(student,callback){

    
    fs.readFile("db.json",function(err,data){
        if(err){
                return callback(err);
        }else{
            //2.将读出来的数据转化为对象 在获取student数组
        data=JSON.parse(data.toString()).student;
                
        var modStudent=data.find(function(item){
                return item.id==student.id;
        });
            

        data.splice(data.findIndex(e => e.id ===modStudent.id ), 1) // 将删除id等于1的选项
        
     

        //5.将数组对象转化为字符串
            var fileData=JSON.stringify({
                student:data
            })
        //6.将字符串写入文件中
            fs.writeFile('db.json',fileData,function(err){
                if(err){
                    return callback(err);
                }else{
                    return callback(null);
                }

        });

        }

});

 
 }

 /**
  * 
  * 根据id查查找学生
  * return []student
  */
exports.findStudnetById=function(id,callback){
  
    fs.readFile("db.json",function(err,data){
        if(err){
                return callback(err);
        }else{
            //2.将读出来的数据转化为对象 在获取student数组
        data=JSON.parse(data.toString()).student;
                console.log(data);
                
        var modStudent=data.find(function(item){
                return item.id==id;
        });
        
        
        return   callback(null,modStudent);
        }

});

}
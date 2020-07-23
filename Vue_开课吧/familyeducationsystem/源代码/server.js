var express = require('express');
var mysql=require('mysql');
var path = require('path');
var app = express();

//以public作为静态资源所在的根目录
app.use('/',express.static('public'));

//需要修改 user和password 为当前电脑数据库的用户名和密码
var connection = mysql.createConnection({     
    host: 'localhost',       
    user: 'root',              //需修改为当前电脑数据库的用户名
    password: 'password',       //需修改为当前电脑数据库的密码
    port: '3306',                   
    database: 'familyeducationsystem',
}); 
 //连接数据库
connection.connect();

//设置不同路由来响应不同的http请求

//用户注册
app.get('/registerSubmit', function (req, res) {
    //先判断用户名和密码是否为空
    if(req.query.username=='' || req.query.password==''){
        console.log('用户名/密码为空！不合法！');
        var response = {
            status: 400
        };
        res.end(JSON.stringify(response));
    }else{
        //判断用户名是否已经存在
        var sql = 'select * from usermessage where username = ?';
        var sqlParams=[req.query.username];
        connection.query(sql,sqlParams,function (err1, result1){
            if(err1){
                console.log('[查询出错] - ',err1.message);
                return;
            }  
            if(result1.length == 1){
                console.log('此用户名已存在！');
                var response = {
                    status: 401
                };
                res.end(JSON.stringify(response));
            }else{
                //将用户注册信息插入用户表
                sql='insert into usermessage(username,password) values(?,?)';
                sqlParams=[req.query.username,req.query.password];
                connection.query(sql,sqlParams,function(err2,result2){
                    if(err2){
                        console.log('[插入出错] - ',err2.message);
                    }else{
                        console.log('用户注册并登录成功');
                        sql='select userId,username,password from usermessage where username=?';
                        sqlParams=[req.query.username];
                        connection.query(sql,sqlParams,function (err3, result3){
                            var response = {
                                status: 200,
                                //将用户id，name，password返回
                                user:result3[0]
                            };
                            res.end(JSON.stringify(response));
                        });
                    }                       
                });            
            }
        });
    }   
});

//用户登录
app.get('/loginSubmit', function (req, res) {
    var sql = 'select * from usermessage where username = ? and password = ?';
    var sqlParams=[req.query.username,req.query.password];
    connection.query(sql,sqlParams,function (err, result){
        if(err){
            console.log('[登录认证出错] - ',err.message);
            return;
        }  
        if(result.length == 1){
            console.log('登陆认证成功');
            var response = {
                status: 200,
                user:result[0]
            };
            res.end(JSON.stringify(response));
        }else{
            console.log('账号或密码错误');
            var response = {
                status: 403
            };
            res.end(JSON.stringify(response));
        }
    });
});
//管理员登录
app.get('/administLogin', function (req, res) {
    var sql = 'select * from administrator where username = ? and password = ?';
    var sqlParams=[req.query.username,req.query.password];
    connection.query(sql,sqlParams,function (err, result){
        if(err){
            console.log('[登录认证出错] - ',err.message);
            return;
        }  
        if(result.length == 1){
            console.log('登陆认证成功');
            var response = {
                status: 200,
                user:result[0]
            };
            res.end(JSON.stringify(response));
        }else{
            console.log('账号或密码错误');
            var response = {
                status: 403
            };
            res.end(JSON.stringify(response));
        }
    });
});

//显示家教信息
app.get('/querySubmit',function (req, res){
    var sql='select * from record_uncontacted order by releaseDate desc';   //降序，最新发布的显示在上面
    connection.query(sql,function (err, result){
        if(err){
            console.log('[查询出错] - ',err.message);
            return;
        }else{
            console.log('查询成功');
            var response = result;
            res.end(JSON.stringify(response));
        }
    });
});
//首页筛选家教
app.get('/searchSubmit',function (req, res){
    var sql='select * from record_uncontacted where recordNum=? or studentsex=? or grade=? or subject=? order by releaseDate desc';   //降序，最新发布的显示在上面
    var sqlParams=[req.query.recordNum,req.query.studentsex,req.query.grade,req.query.subject];
    connection.query(sql,sqlParams,function (err, result){
        if(err){
            console.log('[搜索出错] - ',err.message);
            return;
        }else{
            console.log('搜索成功');
            var response = result;
            res.end(JSON.stringify(response));
        }
    });
});

//发布家教信息
app.get('/releaseSubmit',function (req, res){
    var date=new Date();
    var releaseDate=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    var sql='insert into record_uncontacted(studentsex,grade,subject,requirement,address,linkname,linkphone,publisherId,releaseDate) value(?,?,?,?,?,?,?,?,?)';   
    var sqlParams=[req.query.studentsex,req.query.grade,req.query.subject,req.query.requirement,req.query.address,
                   req.query.linkname,req.query.linkphone,req.query.publisherId,releaseDate]
    connection.query(sql,sqlParams,function (err, result){
        if(err){
            console.log('[登记家教出错] - ',err.message);
            return;
        }else{
            console.log('登记家教成功');
            var response = {
                status:200
            };
            res.end(JSON.stringify(response));
        }
    });
});
 
//领取家教提交
app.get('/receiveSubmit',function(req,res){
     //req.query.releaseDate为'2020-03-19T16:00:00.000Z'格式，需转化为date类型
    var date=new Date(req.query.releaseDate);  
    var releaseDate=date.toLocaleDateString();
    // console.log(releaseDate);

    //将该份家教移入已联系记录表
    var insertSql='insert into record_contacted values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    var sqlParams1=[req.query.recordNum,req.query.studentsex,req.query.grade,req.query.subject,req.query.requirement,
                    req.query.address,req.query.linkname,req.query.linkphone,req.query.publisherId,releaseDate,
                    req.query.teachername,req.query.teacherphone,req.query.teacherId];
    var date=new Date();
    var receiveDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    // console.log(receiveDate)
    sqlParams1.push(receiveDate);
    connection.query(insertSql,sqlParams1,function(err1,result1){
        if(err1){
            console.log('插入记录出错-'+err1.message);
            return;
        }else{
                //从未联系表中删除该份家教
                var deleteSql='delete from record_uncontacted where recordNum=?';
                var sqlParams2=[req.query.recordNum];
                connection.query(deleteSql,sqlParams2,function(err2,result2){
                    if(err2){
                        console.log('删除出错'+err2.message);
                        return;
                    }else{
                        console.log('插入已联系并删除未联系记录成功');
                        var response = {
                            status: 200
                        };
                        res.end(JSON.stringify(response));
                    }
                });
        }
    });
});

//查看用户个人资料
app.get('/usermessage',function(req,res){
    var sql='select * from usermessage where userId=?';
    var sqlParams=[req.query.userId];
    connection.query(sql,sqlParams,function(err,result){
        if(err){
            console.log("查询出错-"+err.message);
            return;
        }else{
            console.log("查询资料成功");
            var response = result[0];
            res.end(JSON.stringify(response));
        }
    });
});
//修改个人资料
app.get('/modifyMyMessage',function(req,res){
    var sql='update usermessage set username=?,sex=?,phonenumber=?,address=?,identity=?,schoolname=? where userId=?';
    var sqlParams=[req.query.username,req.query.sex,req.query.phonenumber,req.query.address,
                   req.query.identity,req.query.schoolname,req.query.userId];
    connection.query(sql,sqlParams,function(err,result){
        if(err){
            console.log("修改出错-"+err.message);
            return;
        }else{
            console.log("查询资料成功");
            var response={
                status:200
            };
            res.end(JSON.stringify(response));
        }
    });
});

//修改密码
app.get('/modifyPassword',function(req,res){
    var sql='select password from usermessage where userId=?';
    var sqlParams=[req.query.userId];
    connection.query(sql,sqlParams,function(err1,result1){
        if(err1){
            console.log(err1.message);
        }
        if(req.query.oldpassword==result1[0].password){
            sql='update usermessage set password=? where userId=?';
            sqlParams=[req.query.newpassword,req.query.userId];
            connection.query(sql,sqlParams,function(err2,result2){
                if(err2){
                    console.log(err2.message);
                }
                var response={
                    status:2
                };
                res.end(JSON.stringify(response));
            });
        }else{
            var response={
                status:1
            };
            res.end(JSON.stringify(response));
        }
    });
});

//查看正发布的家教记录
app.get('/uncontactedQuery',function(req,res){
    var sql='select * from record_uncontacted where publisherId=? order by releaseDate desc';    //升序
    var sqlParams=[req.query.userId];
    connection.query(sql,sqlParams,function(err,result){
        if(err){
            console.log("查询记录出错"+err.message);
            return;
        }else{
            console.log("查询记录成功");
            var response = result;
            res.end(JSON.stringify(response));
        }
    });
});
//修改发布中家教信息
app.get('/modifyRecord',function (req, res){
    var date=new Date();
    var releaseDate=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    var sql='update record_uncontacted set studentsex=?,grade=?,subject=?,requirement=?,address=?,linkname=?,linkphone=?,releaseDate=? where recordNum=?';   
    var sqlParams=[req.query.studentsex,req.query.grade,req.query.subject,req.query.requirement,req.query.address,
                   req.query.linkname,req.query.linkphone,releaseDate,req.query.recordNum];
    connection.query(sql,sqlParams,function (err, result){
        if(err){
            console.log('[修改家教出错] - ',err.message);
            return;
        }else{
            console.log('修改家教成功');
            var response = {
                status:200
            };
            res.end(JSON.stringify(response));
        }
    });
});
//撤销发布中家教
app.get('/removeRecord',function(req,res){
    var sql='delete from record_uncontacted where recordNum=?';
    var sqlParams=[req.query.recordNum];
    connection.query(sql,sqlParams,function(err,result){
        if(err){
            console.log("撤销家教出错"+err.message);
            return;
        }else{
            console.log("撤销家教成功");
            var response = {
                status:200
            };
            res.end(JSON.stringify(response));
        }
    });
});

//查看已领取的家教记录
app.get('/contactedQuery',function(req,res){
    var sql='select * from record_contacted where publisherId=? or teacherId=? order by receiveDate desc';
    var sqlParams=[req.query.userId,req.query.userId];
    connection.query(sql,sqlParams,function(err,result){
        if(err){
            console.log("查询记录出错"+err.message);
            return;
        }else{
            console.log("查询记录成功");
            var response = result;
            res.end(JSON.stringify(response));
        }
    });
});
//重新编辑发布
app.get('/editReleaseSubmit',function (req, res){
    var date=new Date();
    var releaseDate=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    var sql='insert into record_uncontacted(studentsex,grade,subject,requirement,address,linkname,linkphone,publisherId,releaseDate) value(?,?,?,?,?,?,?,?,?)';
    var sqlParams=[req.query.studentsex,req.query.grade,req.query.subject,req.query.requirement,
                   req.query.address,req.query.linkname,req.query.linkphone,req.query.publisherId,releaseDate];
    connection.query(sql,sqlParams,function (err, result){
        if(err){
            console.log('[发布家教出错] - ',err.message);
            return;
        }else{
            console.log('发布家教成功');
            var response = {
                status:200
            };
            res.end(JSON.stringify(response));
        }
    });
});

//用户管理
app.get('/userAdminist',function(req,res){
    var sql='select * from usermessage';
    connection.query(sql,function (err, result){
        if(err){
            console.log('[查询出错] - ',err.message);
            return;
        }else{
            console.log('查询成功');
            var response = result;
            res.end(JSON.stringify(response));
        }
    });
});
//
app.get('/searchUser',function(req,res){
    var sql='select * from usermessage where userId=? or phonenumber=?';
    var sqlParams=[req.query.userId,req.query.phonenumber];
    connection.query(sql,sqlParams,function (err, result){
        if(err){
            console.log('[搜索出错] - ',err.message);
            return;
        }else{
            console.log('搜索成功');
            var response = result;
            res.end(JSON.stringify(response));
        }
    });
});
//注销用户
app.get('/userDelete',function(req,res){
    var sql='delete from usermessage where userId=?';
    var sqlParams=[req.query.userId];
    connection.query(sql,sqlParams,function (err, result){
        if(err){
            console.log('[注销出错] - ',err.message);
            return;
        }else{
            console.log('注销成功');
            var response = {
                status:200
            };
            res.end(JSON.stringify(response));
        }
    });
});
//管理员搜索发布中家教
app.get('/adminSearchRecording',function (req, res){
    var sql='select * from record_uncontacted where recordNum=?';   //降序，最新发布的显示在上面
    var sqlParams=[req.query.recordNum];
    connection.query(sql,sqlParams,function (err, result){
        if(err){
            console.log('[搜索出错] - ',err.message);
            return;
        }else{
            console.log('搜索成功');
            var response = result;
            res.end(JSON.stringify(response));
        }
    });
});

//管理员查看所有家教记录
app.get('/contactedAllQuery',function(req,res){
    var sql='select * from record_contacted order by receiveDate desc';
    connection.query(sql,function (err, result){
        if(err){
            console.log('[查询出错] - ',err.message);
            return;
        }else{
            console.log('查询成功');
            var response = result;
            res.end(JSON.stringify(response));
        }
    });
});
//管理员搜索家教记录
app.get('/adminSearchRecorded',function (req, res){
    var sql='select * from record_contacted where recordNum=? or linkphone=? or teacherphone=?';   
    var sqlParams=[req.query.recordNum,req.query.linkphone,req.query.teacherphone];
    connection.query(sql,sqlParams,function (err, result){
        if(err){
            console.log('[搜索出错] - ',err.message);
            return;
        }else{
            console.log('搜索成功');
            var response = result;
            res.end(JSON.stringify(response));
        }
    });
});

var server = app.listen(8080, function () {
 
  var host = server.address().address;
  var port = server.address().port;
 
  console.log("正在访问http://127.0.0.1:8080...");
});


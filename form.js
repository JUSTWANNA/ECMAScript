/**
 * Created by Administrator on 2017/12/22.
 */
var http=require('http');
var url=require('url');
var fs=require('fs');
var express=require('express');
var app=express();

app.use(express.static('public'));  //express.static 加载静态文件的方法。
app.get('/form.html', function (req, res) {   //加载form 表单页面。
    res.sendFile( __dirname + "/" + "form.html" );  //发送文件 form.html
});
app.get('/get_form',function(req,res){  //得到请求接口。
    var response={
        'name':req.query.first_name,  //得到输入的用户名
        'password':req.query.first_password  //得到输入的密码
    };
    console.log(response);
    res.end(JSON.stringify(response));  //转为字符串
});

var server=app.listen(8081,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log(host, port);
});
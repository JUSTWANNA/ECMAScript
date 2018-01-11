/**
 * Created by Administrator on 2017/12/22.
 */
var http=require('http');
var url=require('url');
var fs=require('fs');
var express=require('express');
var app=express();
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });
console.log(urlencodedParser);

//bodyParser.json(options)  options可选 ， 这个方法返回一个仅仅用来解析json格式的中间件。这个中间件能接受任何body中任何Unicode编码的字符。支持自动的解析gzip和 zlib。
//bodyParser.urlencoded(options) options可选，这个方法也返回一个中间件，这个中间件用来解析body中的urlencoded字符， 只支持utf-8的编码的字符。同样也支持自动的解析gzip和 zlib

app.use(express.static('public'));  //express.static 加载静态文件的方法。
app.get('/form2.html', function (req, res) {   //加载form 表单页面。
    res.sendFile( __dirname + "/" + "form2.html" );  //发送文件 form.html
});
app.post('/post_form',urlencodedParser,function(req,res){  //得到请求接口。

    //输出json 格式
    var response={
        'name':req.body.first_name,  //得到输入的用户名
        'password':req.body.first_password  //得到输入的密码
    };
    console.log(response);
    res.end(JSON.stringify(response));  //转为字符串
});

var server=app.listen(8082,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log(host, port);
});
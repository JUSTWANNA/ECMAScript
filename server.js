////var http = require("http"); //加载http模块
////var url = require("url"); //加载URL路由模块
////
////function start(route) {
////    function onRequest(request, response) {
////        var pathname = url.parse(request.url).pathname;
////        console.log("Request for " + pathname + " received.");
////
////        route(pathname);
////
////        response.writeHead(200, {"Content-Type": "text/plain"});
////        response.write("Hello World");
////        response.end();
////    }
////
////    http.createServer(onRequest).listen(8888);
////    console.log("Server has started.");
////}
////
////exports.start = start;
//var http = require('http');
////
//http.createServer(function (request, response) {
//
//    // 发送 HTTP 头部
//    // HTTP 状态值: 200 : OK
//    // 内容类型: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});
//
//    // 发送响应数据 "Hello World"
//    response.end('Hello World\n');
//}).listen(8888);
//
//// 终端打印如下信息
//console.log('Server running at http://127.0.0.1-9:8888/');
////var http=require('http');  //加载HTTP  模块
////
////http.createServer(function(request,response){
////    response.writeHead(200,{'Content-Type': 'text/plain'});
////    response.end('11111\n');
////}).listen(8888);
////console.log('server http://127.0.0.1-9:8888/');

//var mysql      = require('mysql');
//// 创建链接 host：localhost/127.0.01.1-9 ip地址  MySQL——user 用户名 MySQL——用户密码password 数据库请求端口——3306；
//// database
//var connection = mysql.createConnection({
//    host     : 'localhost',     //host：localhost/127.0.01.1-9 ip地址
//    user     : 'root',         //MySQL——user 用户名
//    password : '12345678',    //MySQL——用户密码password
//    port:'3306',              //端口
//    database : 'test'         //database 数据库名称。
//});
//
////链接开始
//connection.connect();
//
////connection.query('SELECT * FROM user_table',  查询  从数据库取数据
//connection.query('SELECT * FROM user_table', function (error, results, fields) {
//    if (error) {
//        console.log(error);
//    }else{
//        console.log(JSON.stringify(results));
//        console.log('The solution is: ', results[0]);
//    }
//});
var mySql=require('mysql');
var socket=require('socket.io');
var http=require('http');
var url=require('url');
var fs=require('fs');
var util=require('util');

var connection=mySql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345678',
    port:'3306',
    database:'test'
});

connection.connect();

connection.query('SELECT username,online FROM user_table WHERE ID=2',function(err,rel,fields){
    if(err){
        console.log(err);
    }else{
        console.log(JSON.stringify(rel));
    }
});
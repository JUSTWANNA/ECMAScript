////var http = require("http"); //����httpģ��
////var url = require("url"); //����URL·��ģ��
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
//    // ���� HTTP ͷ��
//    // HTTP ״ֵ̬: 200 : OK
//    // ��������: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});
//
//    // ������Ӧ���� "Hello World"
//    response.end('Hello World\n');
//}).listen(8888);
//
//// �ն˴�ӡ������Ϣ
//console.log('Server running at http://127.0.0.1-9:8888/');
////var http=require('http');  //����HTTP  ģ��
////
////http.createServer(function(request,response){
////    response.writeHead(200,{'Content-Type': 'text/plain'});
////    response.end('11111\n');
////}).listen(8888);
////console.log('server http://127.0.0.1-9:8888/');

//var mysql      = require('mysql');
//// �������� host��localhost/127.0.01.1-9 ip��ַ  MySQL����user �û��� MySQL�����û�����password ���ݿ�����˿ڡ���3306��
//// database
//var connection = mysql.createConnection({
//    host     : 'localhost',     //host��localhost/127.0.01.1-9 ip��ַ
//    user     : 'root',         //MySQL����user �û���
//    password : '12345678',    //MySQL�����û�����password
//    port:'3306',              //�˿�
//    database : 'test'         //database ���ݿ����ơ�
//});
//
////���ӿ�ʼ
//connection.connect();
//
////connection.query('SELECT * FROM user_table',  ��ѯ  �����ݿ�ȡ����
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
var http=require('http');
var fs=require('fs');
var url=require('url');



http.createServer(function(request,response){   //创建服务；

    var pathname=url.parse(request.url).pathname;  //url  项目名称

    console.log('server name' + pathname);

    fs.readFile(pathname.substr(1),function(err,data){
        if(err){
            console.log(err);
          response.writeHead(404,{'Content-Type':'text/html'});
        }else{
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(data.toString());
        }
        response.end()
    })

}).listen(8082);

console.log('Server running  at http://127.0.0.1-9:8082/');


//var option={
//    host:'localhost',  //请求地址
//    port:'8083',
//    path:'/index.html'
//};
//
//var callBack=function(response){
//    var body='';
//    response.on('data',function(data){
//       body+=data;
//    });
//    response.on('end',function(){
//        console.log(body);
//    })
//};
//
//var req=http.request(option,callBack);
//req.end();

var express=require('express');

var app=express();

app.get('/',function(req,res){
    res.send('Welcome node');
    console.log('Welcome~node');
    console.log(req.route);
});
var Server=app.listen(8081,function(){

    var host=Server.address().address;
    var port=Server.address().port;

    console.log(host,port)
});





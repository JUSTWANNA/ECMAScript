var http=require('http');  //调用http模块
var url=require('url');    //调用url 模块
 function start(route){    //利用匿名函数方法实现服务器和路由结合；

     function onRequest(request,response){
         var pathName=url.parse(request.url).pathname;

         route(pathName);

         response.writeHead(200,{'Content-Type':'text-plain'});
         response.write('激活window');
         response.end();
     }
     http.createServer(onRequest).listen(8888); //设置监听端口

     console.log('开启服务');
 }
exports.start=start; //实现模块加载
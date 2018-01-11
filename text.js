/**
 * Created by Administrator on 2017/12/11.
 */

//    读取文件
var fs=require('fs');
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");



// Buffer 写入缓存区


var buf=new Buffer(12),len=buf.write('wwwwwwwqweqwe');
console.log('写入字节数'+len);

//Buffer   从缓存区读取数据

//Buffer   转换为json

var bufJson=new Buffer('wwwwwwwwshdjhjh');
var b_json=bufJson.toJSON(bufJson);
console.log(b_json);

//   Buffer 合并


var buf1=new Buffer('node.js'),buf2=new Buffer('教程'),buf3=Buffer.concat([buf1,buf2]);
console.log('缓存区内容合并：'+buf3.toString());


// Buffer copy
var buf4=new Buffer('ABC');
var buf5=new Buffer(3);
buf4.copy(buf5);
console.log('拷贝内容：'+buf5.toString());

//  Buffer 缓存区裁剪

var  buf6=new Buffer('i want you');
var  buf7=buf6.slice(0,5);
console.log('裁剪区内容：'+buf7.toString());

// Buffer  缓存区长度length

var buf8=new Buffer('i want you');

console.log('缓存区的长度：'+buf8.length);

//  node Stream(流)

var data1='';
//  创建流
var readStream=fs.createReadStream('input.txt');

// 设置流编码
readStream.setEncoding('UTF8');

// 流的三步骤  data end error

readStream.on('data',function(i){
    data1+=i;
});
readStream.on('end',function(){
    console.log(data1);
});
readStream.on('error',function(err){
    console.log(err.stack);
});
console.log('程序执行完毕');


// 写入流

var data2='write Stream';
var writeStream=fs.createWriteStream('outInput.txt');

writeStream.write(data2,'UTF8');  //写入文件 并且编辑编码格式。

writeStream.end();

writeStream.on('finish',function(){
    console.log('写入完成');
});
writeStream.on('error',function(err){
    console.log(err.stack);
});

console.log('程序执行完毕');


//   管道流
var readStream1=fs.createReadStream('input1.txt');
var writeStream1=fs.createWriteStream('outInput1.txt');
readStream1.pipe(writeStream1);

console.log('程序执行完毕');


//链式流

var zib=require('zlib');
//先创造 读出文件 然后通过管道流  载入压缩方法 再次通过管道流写入文件
fs.createReadStream('input2.txt').pipe(zib.createGzip()).pipe(fs.createWriteStream('input2.txt.gz'))

// 匿名函数

var http=require('http');

function onServer(request,response){

    //request   请求url
    //response  服务器响应
    response.writeHead(200, {"Content-Type": "text/plain"});

    //response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('hello  world');
    response.end()
}
http.createServer(onServer).listen(8888);

var  util=require('util');

function Base(){
        this.name='base',
        this.age=1991,
        this.sex='男',
        this.sayHello=function(){
            console.log('Hello'+this.name);
        }
}

Base.prototype.showName=function(){
    console.log(this.name);
};

function Sub(){
    this.name='jack';
}

util.inherits(Sub,Base);

var newBase=new Base();
newBase.sayHello();
newBase.showName();
console.log(util.inspect(newBase)); //util.inspect()  转化为字符串  便于调试。
var newSub=new Sub();
//newSub.sayHello();
newSub.showName();
//util.isArray(object)
//如果给定的参数 "object" 是一个数组返回true，否则返回false。
console.log(util.isArray([1, 2, 3]));
console.log(util.isArray({}));


//  测试

var buf9=new Buffer(1024);

console.log('准备打开文件');
//r+  读写
fs.open('input.txt','r+',function(err,fd){
   if(err){
       console.log(err);
   }
    console.log('文件开启成功');
    console.log('准备读取文件');
   fs.read(fd,buf9,0,buf9.length,0,function(err,bytes){
       if(err){
           console.log(err);
       }

       console.log('读出的字节数为：'+bytes);

       if(bytes>0){

           console.log(buf9.slice(0, bytes).toString());

       }
       fs.close(fd,function(err){
           if(err){
               console.log(err);
           }
           console.log('文件关闭');
       })
   })
});


fs.open('input.txt','r+',function(err,fd){
   if(err){
      return console.error(err)
   }
    fs.ftruncate(fd,10,function(err){   //文件截取
        if(err){
            return console.error(err)
        }
        fs.read(fd,buf9,0,buf9.length,0,function(err,bytes){
            if(err){
                return console.error(err)
            }
            console.log('ftruncate截取完的字节数：'+bytes);
            if(bytes>0){
                console.log(buf9.slice(0, bytes).toString());
            }
            fs.close(fd,function(err){
                if(err){
                    return console.error(err)
                }

                console.log('关闭');
            })
        })
    })
});


//文件删除 (unlink)

//fs.unlink('input2.txt',function(err){
//   if(err){
//       return console.error(err);
//   }
//    console.log('文件删除');
//});

//  创建目录

//fs.mkdir('input',function(err){
//    if(err){
//
//        return console.error(err);
//    }
//
//    console.log('文件创建完成');
//});
fs.writeFile('input3/input3.txt','Tom  and   Jack',function(err){
    if(err){
        return console.error(err);
    }
    console.log('文件写入完成');
    fs.readFile('input3/input3.txt',function(err,data){
        if(err){
            console.log(err);
        }
        console.log(data.toString());
    })
});

fs.open('input3/input3.txt','r+',function(err,fd){
    if(err){
        console.log(err);
    }
    fs.ftruncate(fd,10,function(err){
        if(err){
            console.log(err);
        }
        fs.read(fd,buf9,0,buf9.length,0,function(err,bytes){
            if(err){
                console.log(err);
            }

            console.log('输出的字节数：'+bytes);
            if(bytes>0){

                console.log(buf9.slice(0, (bytes-11)).toString());
            }

            fs.close(fd,function(err){
                if(err){
                    console.log(err);
                }

                console.log('文件关闭');
            })
        })
    })
});

// node.js  post/get  请求


var  http=require('http');
var  url=require('url');

//http.createServer(function(request,response){
//
//    response.writeHead(200,{'Content-Type':'text/plain,charset=utf-8.txt'});
//    response.end(util.inspect(url.parse(request.url,true)))
//
//}).listen(3000);


 http.createServer(function(request,response){
     response.writeHead(200,{'Content-Type':'text/plain'});
     var path=url.parse(request.url,true).query;
     response.write('name'+path.name);
     response.write('\n');
     response.write('url'+path.url);
     response.end();
 }).listen(3000);


var  querystring=require('querystring');

var postHTML=
    "<html><head><meta charset='utf-8.txt'/><title>form  表单</title></head>" +
    "<body><form method='post'>" +
    "<input type='text' name='name' placeholder='请输入用户名'><br/>" +
    "<input type='password' name='url' placeholder='请输入用户密码'><br/>" +
    "<input type='submit'/>"+
    "</form></body></html>";
//var postHTML =
//    '<html><head><meta charset="utf-8.txt"><title>菜鸟教程 Node.js 实例</title></head>' +
//    '<body>' +
//    '<form method="post">' +
//    '网站名： <input name="name"><br>' +
//    '网站 URL： <input name="url"><br>' +
//    '<input type="submit">' +
//    '</form>' +
//    '</body></html>';
//createServer
http.createServer(function(request,response){

    var body='';
    request.on('data',function(chunk){
        body+=chunk;
    });
    request.on('end',function(){
          body=querystring.parse(body);
        response.writeHead(200,{'Content-Type':'text/html; charset=utf-8.txt'});
         if(body.name && body.url){
             response.write('用户名为：'+body.name);
             response.write('用户名密码为：'+body.url);

         }else{
             response.write(postHTML)
         }
        response.end()
    })
}).listen(5000);
//var querystring = require('querystring');

//var postHTML =
//    '<html><head><meta charset="utf-8.txt"><title>菜鸟教程 Node.js 实例</title></head>' +
//    '<body>' +
//    '<form method="post">' +
//    '网站名： <input name="name"><br>' +
//    '网站 URL： <input name="url"><br>' +
//    '<input type="submit">' +
//    '</form>' +
//    '</body></html>';

//http.createServer(function (req, res) {
//    var body = "";
//    req.on('data', function (chunk) {
//        body += chunk;
//    });
//    req.on('end', function () {
//        // 解析参数
//        body = querystring.parse(body);
//        // 设置响应头部信息及编码
//        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
//
//        if(body.name && body.url) { // 输出提交的数据
//            res.write("网站名：" + body.name);
//            res.write("<br>");
//            res.write("网站 URL：" + body.url);
//        } else {  // 输出表单
//            res.write(postHTML);
//        }
//        res.end();
//    });
//}).listen(5000);

//node.js 工具模块
var  os=require('os');
console.log('CPU字节数：'+os.endianness());
console.log("系统主机名："+os.hostname());
console.log('系统名os.type：'+os.type());
console.log('系统名os.platform'+os.platform());
console.log('系统内存总量os.totalmem():'+os.totalmem());
console.log('CPU配置  数组'+os.cpus());





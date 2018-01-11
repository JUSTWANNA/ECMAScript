/**
 * Created by Administrator on 2017/12/22.
 */
var http=require('http');
var url=require('url');
var fs=require('fs');
var express=require('express');
var app=express();
var bodyParser = require('body-parser');
var multer=require('multer');  //文件上传中间插件；
// 创建 application/x-www-form-urlencoded 编码解析
// bodyParser.urlencoded  对url进行encoded编码  extended 编码是否延长
var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(express.static('public'));  //express.static 加载静态文件的方法。
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({dest:'/tmp'}).array('image'));
app.get('/form3.html', function (req, res) {   //加载form 表单页面。
    res.sendFile( __dirname + "/" + "form3.html" );  //发送文件 form.html
});
app.post('/file_form',urlencodedParser,function(req,res){  //得到请求接口。

    console.log(req.files[0]);
    var des_file=__dirname+'/'+req.files[0].originalname;
    fs.readFile(req.files[0].path,function(err,data){
        fs.writeFile(des_file,data, function (err) {
            if(err){
                console.log(err);
            }else{
                response={
                    message:'Flies',
                    fliename:req.files[0].originalname
                }
                console.log(res);
                res.end(JSON.stringify(response))
            }
        })
    })
});

var server=app.listen(8083,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log(host, port);
});
/**
 * Created by Administrator on 2017/12/22.
 */
var http=require('http');
var url=require('url');
var fs=require('fs');
var express=require('express');
var app=express();
var bodyParser = require('body-parser');
var multer=require('multer');  //�ļ��ϴ��м�����
// ���� application/x-www-form-urlencoded �������
// bodyParser.urlencoded  ��url����encoded����  extended �����Ƿ��ӳ�
var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(express.static('public'));  //express.static ���ؾ�̬�ļ��ķ�����
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({dest:'/tmp'}).array('image'));
app.get('/form3.html', function (req, res) {   //����form ��ҳ�档
    res.sendFile( __dirname + "/" + "form3.html" );  //�����ļ� form.html
});
app.post('/file_form',urlencodedParser,function(req,res){  //�õ�����ӿڡ�

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
/**
 * Created by Administrator on 2017/12/22.
 */
var http=require('http');
var url=require('url');
var fs=require('fs');
var express=require('express');
var app=express();
var bodyParser = require('body-parser');
// ���� application/x-www-form-urlencoded �������
var urlencodedParser = bodyParser.urlencoded({ extended: false });
console.log(urlencodedParser);

//bodyParser.json(options)  options��ѡ �� �����������һ��������������json��ʽ���м��������м���ܽ����κ�body���κ�Unicode������ַ���֧���Զ��Ľ���gzip�� zlib��
//bodyParser.urlencoded(options) options��ѡ���������Ҳ����һ���м��������м����������body�е�urlencoded�ַ��� ֻ֧��utf-8�ı�����ַ���ͬ��Ҳ֧���Զ��Ľ���gzip�� zlib

app.use(express.static('public'));  //express.static ���ؾ�̬�ļ��ķ�����
app.get('/form2.html', function (req, res) {   //����form ��ҳ�档
    res.sendFile( __dirname + "/" + "form2.html" );  //�����ļ� form.html
});
app.post('/post_form',urlencodedParser,function(req,res){  //�õ�����ӿڡ�

    //���json ��ʽ
    var response={
        'name':req.body.first_name,  //�õ�������û���
        'password':req.body.first_password  //�õ����������
    };
    console.log(response);
    res.end(JSON.stringify(response));  //תΪ�ַ���
});

var server=app.listen(8082,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log(host, port);
});
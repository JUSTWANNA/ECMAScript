/**
 * Created by Administrator on 2017/12/22.
 */
var http=require('http');
var url=require('url');
var fs=require('fs');
var express=require('express');
var app=express();

app.use(express.static('public'));  //express.static ���ؾ�̬�ļ��ķ�����
app.get('/form.html', function (req, res) {   //����form ��ҳ�档
    res.sendFile( __dirname + "/" + "form.html" );  //�����ļ� form.html
});
app.get('/get_form',function(req,res){  //�õ�����ӿڡ�
    var response={
        'name':req.query.first_name,  //�õ�������û���
        'password':req.query.first_password  //�õ����������
    };
    console.log(response);
    res.end(JSON.stringify(response));  //תΪ�ַ���
});

var server=app.listen(8081,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log(host, port);
});
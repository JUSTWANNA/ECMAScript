/**
 * Created by Administrator on 2017/4/12.
 */
var express = require("express");
var path=require('path');
var app = express();
server  = require('http').Server(app);
app.set('views',__dirname);    // ������ͼ
app.set('view engine', 'html');
app.engine( '.html', require( 'ejs' ).__express );
require('./index')(app);      //·�������ļ�
server.listen(80,function(){
    console.log('App start,port 80.');
});
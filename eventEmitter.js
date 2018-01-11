/**
 * Created by Administrator on 2017/5/27.
 */
//var events=require('events'); //event 事件模块
//var eventEmitter=new events.eventEmitter();  //创建对象
//var EventEmitter = require('events').EventEmitter;
//var event = new EventEmitter();
//event.on('dataEvent',function(){
//    console.log('start');
//});
//setTimeout(function(){
//    event.emit('dataEvent');
//},1000);
var events=require('events');
var emitter=new events.EventEmitter();
//var events = require('events');
//var emitter = new events.EventEmitter();
emitter.on('dataEvent',function(age1,age2){
         console.log('listeners1',age1,age2);
 });
emitter.on('dataEvent',function(age1,age2){
    console.log('listeners2',age1,age2);
});
emitter.emit('dataEvent','age1','age2');
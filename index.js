/**
 * Created by Administrator on 2017/5/4.
 */
var server=require('./server');
var router=require('./route');
server.start(router.route);
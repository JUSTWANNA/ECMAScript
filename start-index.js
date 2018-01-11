/**
 * Created by Administrator on 2017/12/12.
 */
var server = require("./strat");
var router = require("./router");

server.start(router.route);
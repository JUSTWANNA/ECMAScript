/**
 * Created by Administrator on 2017/4/13.
 */
var wechat = require('wechat');
var verifyInfo = {  //验证信息
    token: 'weixin',  // your wechat token
    appid: 'wx5176019a81c90e15'  // your wechat appid
};

//处理文本消息
var handler = wechat(verifyInfo, wechat.text(wechatText));

module.exports = handler;

function wechatText(message, req, res, next) {
    var input = (message.Content || '').trim();

    if (/你好/.test(input)) {
        res.reply('Hello world (??ロ??)?? ~~');
    } else {
        res.reply('(?_?)? 听不懂啦');
    }
}
/**
 * Created by Administrator on 2017/4/13.
 */
var wechat = require('wechat');
var verifyInfo = {  //��֤��Ϣ
    token: 'weixin',  // your wechat token
    appid: 'wx5176019a81c90e15'  // your wechat appid
};

//�����ı���Ϣ
var handler = wechat(verifyInfo, wechat.text(wechatText));

module.exports = handler;

function wechatText(message, req, res, next) {
    var input = (message.Content || '').trim();

    if (/���/.test(input)) {
        res.reply('Hello world (??��??)?? ~~');
    } else {
        res.reply('(?_?)? ��������');
    }
}
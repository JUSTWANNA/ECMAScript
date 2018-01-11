/**
 * Created by Administrator on 2018/1/3.
 */

/*
* 1-9��exec����child_process.exec �����������Ļ����������ȴ����̽�����һ���Է��ػ����������ݡ� ������һ�ص������Ĳ������ء�
* 2��spawn����child_process.spawn ָ�������в���������
* 3��fork����child_process.fork   �����ӽ���������ģ�顣fork���ڸ����ӽ����н���ͨ�Źܵ������ڽ���ͨ�С�
*
*   exec  �﷨
*   child_process.exec(command[,option],callback)
*   ����
    ����˵�����£�
    command�� �ַ����� ��Ҫ���е��������ʹ�ÿո����(�мǲ����ո����)
    options �����󣬿����ǣ�
    cwd ���ַ������ӽ��̵ĵ�ǰ����Ŀ¼
    env������ ����������ֵ��
    encoding ���ַ������ַ����루Ĭ�ϣ� 'utf8'��
    shell ���ַ�������Ҫִ������� Shell��Ĭ��: �� UNIX ��Ϊ/bin/sh�� �� Windows ��Ϊcmd.exe�� Shell Ӧ����ʶ�� -c������ UNIX �У��� /s /c �� Windows �С� ��Windows �У������н���Ӧ���ܼ���cmd.exe��
    timeout�����֣���ʱʱ�䣨Ĭ�ϣ� 0��
    maxBuffer�����֣� �� stdout �� stderr ��������ڵ���󻺳壨�����ƣ������������ô�ӽ��̽��ᱻɱ�� ��Ĭ��: 200*1024��
    killSignal ���ַ����������źţ�Ĭ�ϣ�'SIGTERM'��
    uid�����֣������û����̵� ID
    gid�����֣����ý������ ID
    callback ���ص�������������������error, stdout �� stderr��
*
*
* */

// exec ����

var fs=require('fs');
var child_process=require('child_process');

for(var i=0; i<3; i++){
   //var workerProcess = child_process.exec('node support.js '+i,
    var  workProcess = child_process.exec('node support.js ' +i,
        function(error,stdout,stderr){
        if(error){
            console.log(error.stack);
            console.log('error.code:'+error.code);
            console.log('error.single:'+error.signal);
        }
        console.log('stdout:'+stdout);
        console.log('stderr'+stderr);
    });
    workProcess.on('exit',function(code){
        console.log('�ӽ����Ѿ��˳�  code   �˳���'+code);
    })
}

/*
*   spawn() ����
    child_process.spawn ʹ��ָ���������в��������½��̣��﷨��ʽ���£�
    child_process.spawn(command[, args][, options])
    ����
    ����˵�����£�
    command�� ��Ҫ���е�����
    args�� Array �ַ�����������
    options Object
    cwd String �ӽ��̵ĵ�ǰ����Ŀ¼
    env Object ����������ֵ��
    stdio Array|String �ӽ��̵� stdio ����
    detached Boolean ����ӽ��̽����ɽ�������쵼
    uid Number �����û����̵� ID
    gid Number ���ý������ ID
    spawn() ���������� (stdout & stderr)���ڽ��̷��ش�������ʱʹ�á�����һ����ʼִ��ʱ spawn() �Ϳ�ʼ������Ӧ��
 */

for(var k=0;k<3;k++){
    var workSpawn=child_process.spawn('node',['support.js', k]);
    workSpawn.stdout.on('data',function(data){
        console.log('stdout:'+data);
    });
    workSpawn.stderr.on('data',function(data){
        console.log('stderr��'+data);
    });
    workSpawn.on('exit',function(code){
        console.log('�����˳���'+code);
    })
}
/*
     fork ����
     child_process.fork �� spawn() ������������ʽ�����ڴ������̣��﷨��ʽ���£�
     child_process.fork(modulePath[, args][, options])
     ����
     ����˵�����£�
     modulePath�� String����Ҫ���ӽ��������е�ģ��
     args�� Array �ַ�����������
     options��Object
     cwd String �ӽ��̵ĵ�ǰ����Ŀ¼
     env Object ����������ֵ��
     execPath String �����ӽ��̵Ŀ�ִ���ļ�
     execArgv Array �ӽ��̵Ŀ�ִ���ļ����ַ����������飨Ĭ�ϣ� process.execArgv��
     silent Boolean ���Ϊtrue���ӽ��̵�stdin��stdout��stderr���ᱻ�����������̣��������ǽ���Ӹ������м̳С���Ĭ��Ϊ��false��
     uid Number �����û����̵� ID
     gid Number ���ý������ ID
     ���صĶ������ӵ��ChildProcessʵ�������з���������һ���ڽ���ͨ���ŵ���
 */

for(var j=0;j<3;j++){
    //ѭ�������ӽ���
    var workFork=child_process.fork('support.js',[j]);
    workFork.on('close',function(code){
        console.log('process is over '+code);
    })
}
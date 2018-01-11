/**
 * Created by Administrator on 2017/5/3.
 */
 function hello(){
    var name;
    this.setName=function(thisName){
        name=thisName;
    }
    this.sayHello=function(){
        console.log('hello'+name);
    }
};
module.exports=hello;
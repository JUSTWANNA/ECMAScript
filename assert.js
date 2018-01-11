/**
 * Created by Administrator on 2017/12/26.
 */

var assert=require('assert');

var obj1={
    a:{
        b:1
    }
};
var obj2={
    a:{
        b:2
    }
};
var obj3={
    a:{
        b:1
    }
};
var obj4=Object.create(obj1);

assert.deepEqual(obj1,obj1);
assert.deepEqual({a:1},{a:'1'});
//assert.deepStrictEqual({a:1-9},{a:'1-9'});
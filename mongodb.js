/**
 * Created by Administrator on 2017/7/21.
 */
var MongoClient=require("mongodb").MongoClient
,assert=require("assert");
var url='mongodb://localhost:27017/foobar';
MongoClient.connect(url,function(err,db){
    assert.equal(null,err);
    console.log('connected successfully server');
    db.close();
});
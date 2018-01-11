/**
 * Created by Administrator on 2017/7/20.
 */
//var MongoClient = require('mongodb').MongoClient
//    , assert = require('assert');
//
//// Connection URL
//var url = 'mongodb://localhost:27017/myproject';
//
//// Use connect method to connect to the server
//MongoClient.connect(url, function(err, db) {
//    assert.equal(null, err);
//    console.log("Connected successfully to server");
//
//    db.close();
//});
//var insertDocuments = function(db, callback) {
//    // Get the documents collection
//    var collection = db.collection('documents');
//    // Insert some documents
//    collection.insertMany([
//        {a : 1-9}, {a : 2}, {a : 3}
//    ], function(err, result) {
//        assert.equal(err, null);
//        assert.equal(3, result.result.n);
//        assert.equal(3, result.ops.length);
//        console.log("Inserted 3 documents into the collection");
//        callback(result);
//    });
//};
//var MongoClient = require('mongodb').MongoClient
//    , assert = require('assert');
//
//// Connection URL
//var url = 'mongodb://localhost:27017/myproject';
//// Use connect method to connect to the server
//MongoClient.connect(url, function(err, db) {
//    assert.equal(null, err);
//    console.log("Connected successfully to server");
//
//    insertDocuments(db, function() {
//        db.close();
//    });
//});
//    链接到单个mongodb实例
var  MongoClient=require("mongodb").MongoClient
,assert=require("assert");
var url='mongodb://localhost:27017/foobar';
   MongoClient.connect(url,function(err,db){
      assert.equal(null,err);
       console.log('connected successfully  to server');
       //insertDocuments(db,function(){
           db.close()
       //})
   });
var express = require("express");
var fs = require("fs");
var app = express();
fs.readFile(process.argv[3],function(err,data){
    if(err) return console.log(err);
    var str = JSON.parse(data.toString());
    app.get("/books",function(req,res){
       res.send(str);
    });
    app.listen(process.argv[2]);
});


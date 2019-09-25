#!/usr/bin/node

const cp = require('child_process');

var cmd = process.argv[2];
var arg=[];

for(var i=3;i<process.argv.length;i++){
  arg.push(process.argv[i]);
}

cp.execFile(cmd,arg,function(err,out){
  if(err){
    console.error(err.message);
    process.exit(1);
  }
  console.log(out);
})

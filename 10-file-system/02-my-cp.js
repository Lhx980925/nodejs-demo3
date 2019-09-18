#!/usr/bin/node

const fs=require('fs'),
      src=process.argv[2],
      dst=process.argv[3];

var sta,stm;

if(fs.existsSync(src)){
  stm=fs.createReadStream(src).pipe(fs.createWriteStream(dst));

  stm.on('close',()=>{
    sta=fs.statSync(src);
    fs.chmodSync(dst,sta.mode);
  });
}else{
  console.log('%s not exists!',src);
  process.exit(1);
}

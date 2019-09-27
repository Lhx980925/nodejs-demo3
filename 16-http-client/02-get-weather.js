#!/usr/bin/node

const http=require('http'),
  city=process.argv[2] || '石家庄';

var addr='http://v.juhe.cn/weather/index?cityname=' + city + '&key=70b20823f67b5f0ca3358b796fd83260';

http.get(global.encodeURI(addr),function(res){
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);

  console.log(res.headers);
  console.log('');

  var result='';

  res.on('data',function(data){
    result+=data.toString('utf8');
  });

  res.on('end',function(){
    var weather=JSON.parse(result);
    console.log(weather.result.today.temperature);
  });
});

var http = require('http');


http.createServer(function (request, response){
  var a= 10;
  const abc = [];
  const test = new Promise((resolve,reject) =>{
    for(var i=0;i<a;i++){
      abc.push(i);
    }
    reject(abc);
  }).then(function(resolve){
    console.log(resolve);
  },function(reject){
    console.log(reject);
  });
  
 
}).listen(3000);
console.log("a");

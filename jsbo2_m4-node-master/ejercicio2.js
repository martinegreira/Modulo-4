//Timer de ayer pero con promise

'use strict';
 var time = 3000
function timer() {
  return new Promise ((resolver,reject) => {
      if(time < 4000){
          return reject(new error("Error2000"))
      }
        setTimeout(() => {
            return resolver("done");
        },time);
  });
}

setTimeout().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
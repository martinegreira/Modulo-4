var vidas = 10;
var envenenador = true;

// function vidasmenos (callback) {
//     vidas = 2
//     if(3 > vidas){
//         callback("Una vida menos")
//     }}
// vidasmenos(function(alerta){
//  console.log(alerta);
// })
function veneno(callback, num, stateMsg, finalMsg) {
  for (let restar = 0.5; vidas > -1; restar++) {
      
      console.log(stateMsg)

    vidas = vidas - restar;
    if (vidas <= 0) {
        console.log(finalMsg)
      callback();
      break
    }
    console.log(vidas);
  }
}
veneno(function() {
// otras cosas como por ejemplo preguntar si quiere volver a
}, 3, "Estas siendo envenenado", "Has muerto por envenenamiento");



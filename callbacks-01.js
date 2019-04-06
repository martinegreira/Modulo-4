'use strict';

function mostrarNumero(n) {
  console.log(n);
}

function sumar(n1, n2, callback) {
  setTimeout(() => {
    callback(n1 + n2);
  }, 2000);
}

sumar(3, 5, mostrarNumero);

sumar(2, 7, (result) => {
  mostrarNumero(result);
});

async function dividir(n1, n2) {
  if (n2 === 0) {
    throw new error("Error"); // throw lanza una excepcion //
  }
  return n1 / n2;
}
(async () => {
  try {
    const resultado = await dividir(5, 4);
    console.log(resultado);
  } catch (e) {
    console.log(e.message);
  }
})
();

//Para hacer await debes estar en una funcion asincrona//
//Catch solo puede capturar errores sincronos//

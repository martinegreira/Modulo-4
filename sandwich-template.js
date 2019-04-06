"use strict";

const ARROZ = "🌾";
const CARNE = "🥩";
const LECHE = "🥛";
const TOMATE = "🍅";
const ingredientes = [ARROZ, CARNE, LECHE, TOMATE];

/**
 * Función que prepara un alimento a partir de un ingrediente, conviertiendo:
 *  ingrediente arroz a pan
 *  ingrediente carne a bacon
 *  ingrediente leche a queso
 *  ingrediente tomate a ensalada
 * @param {String} ingrediente [ARROZ, CARNE, LECHE, TOMATE]
 * @return {String} comida Devuelve el alimento procesado
 */
function prepare(ingrediente) {
  const pan = "🍞";
  const bacon = "🥓";
  const queso = "🧀";
  const ensalada = "🥗";
  if (ingrediente == ARROZ) {
    return pan;
  } if (ingrediente == CARNE) {
    return bacon;
  } if (ingrediente == LECHE) {
    return queso;
  } if (ingrediente == TOMATE) {
    return ensalada;
  }

}
const alimentos
ingrediente.map(ingredientes => alimentos.push (prepare(ingredientes)))
console.log(alimentos);
/**
 * Indica si un ingrediente es vegano o no. Los ingredientes
 * veganos son el arroz y el tomate
 * @param {String} ingrediente [ARROZ, CARNE, LECHE, TOMATE]
 * @return {Boolean} true si es un ingrediente vegano
 */
function esVegano(ingrediente) {
  ingrediente.filter(CARNE,queso)
  return ingredientes;
}

/**
 * Junta (concatena) 2 ingredientes
 * @param {String} ingrediente1
 * @param {String} ingrediente2
 * @return {String} la unión de los ingredientes dados
 */
function combina(ingrediente1, ingrediente2) {
  // return XXXX;
}

/**
 * Preparar los ingredientes dados en la variable "ingredientes" a sus
 * respectivos alimentos. Usar la función que sirva para recorrer cada elemento
 * del array y generar uno nuevo con el alimento preparado.
 */
console.log("preparar");

/**
 * Mostrar en pantalla los elementos veganos. Para ello, usar la función
 * que recorra los elementos del array e indique cuál son veganos o no a partir
 * de una condición.
 */
console.log("son veganos");

/**
 * Mostrar por pantalla la unión de todos los ingredientes. Usar el método que
 * recorra todos los elementos del array y permite obtener un nuevo objeto
 */
console.log("combinado");

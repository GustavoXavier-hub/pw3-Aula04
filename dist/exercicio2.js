"use strict";
exports.__esModule = true;
var viagem_1 = require("./viagem");
var teste = new viagem_1.Viagem(2, 23.5, 59);
console.log(teste.obterDistancia().toFixed(3));
console.log(teste.obterConsumo());

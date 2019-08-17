"use strict";
exports.__esModule = true;
var pessoa_1 = require("./pessoa");
var teste = new pessoa_1.Pessoa(68, 1.74);
console.log(teste.imc().toFixed(3));
console.log(teste.classificar());

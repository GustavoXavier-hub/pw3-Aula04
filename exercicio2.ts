import {Viagem} from "./viagem"
 

let teste = new  Viagem(2,23.5,59)


console.log(teste.obterDistancia().toFixed(3))

console.log(teste.obterConsumo())


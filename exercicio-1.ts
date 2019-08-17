import {Pessoa} from "./pessoa"



let teste  =new Pessoa(68,1.74)

console.log(teste.imc().toFixed(3))

console.log(teste.classificar())

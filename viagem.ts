 class Viagem {

    constructor(public tempogasto: number, public velocidademedia: number, public rendimentoveiculo:number) { }

    obterDistancia(){

        return  this.tempogasto * this.velocidademedia

      

    }
    obterConsumo(){

    
       return  this.rendimentoveiculo/this.obterDistancia()
     
    
    }
}

export {Viagem}
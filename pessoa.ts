class Pessoa {

    constructor(public peso: number, public altura: number) { }

    imc() {
        return this.peso/ (this.altura *this.altura)  }

    classificar() {
        if (this.imc() <= 18.5) {
            return "Abaixo do Peso"
        } else if (this.imc() <= 24.9) {
            return "Peso Normal"
        } else if (this.imc() <= 25.0) {
            return "Pre-Obesidade"
        } else if (this.imc() <= 30.0) {
            return "Obesidade-Grau-I"
        } else if (this.imc() <= 35.0) {
            return "Obesidade-Grau-II"
        } else {
            return "Obesidade-Grau-III"
        }

    }

    

}

export{Pessoa }




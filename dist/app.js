var Aluno = /** @class */ (function () {
    function Aluno(nome) {
        this.nome = nome;
    }
    Aluno.prototype.exibir = function () {
        console.log("Nome:" + this.nome);
    };
    return Aluno;
}());
var valter = new Aluno("Valter Costa");
valter.exibir();

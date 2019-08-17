"use strict";
exports.__esModule = true;
var Viagem = /** @class */ (function () {
    function Viagem(tempogasto, velocidademedia, rendimentoveiculo) {
        this.tempogasto = tempogasto;
        this.velocidademedia = velocidademedia;
        this.rendimentoveiculo = rendimentoveiculo;
    }
    Viagem.prototype.obterDistancia = function () {
        return this.tempogasto * this.velocidademedia;
    };
    Viagem.prototype.obterConsumo = function () {
        return this.rendimentoveiculo / this.obterDistancia();
    };
    return Viagem;
}());
exports.Viagem = Viagem;

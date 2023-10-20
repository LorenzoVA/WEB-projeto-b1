"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AvaliacaoServices_1 = __importDefault(require("../services/AvaliacaoServices"));
class AvaliacaoController {
    constructor() { }
    async listarAvaliacao(req, res) {
        const result = await AvaliacaoServices_1.default.listarAvaliacao();
        if (result) {
            res.status(200).json({
                status: 'Avaliação listada com sucesso',
                avaliacao: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async atualizarAvaliacao(req, res) {
        const avaliacao = req.body;
        const result = await AvaliacaoServices_1.default.atualizarAvaliacao(avaliacao);
        if (result) {
            res.status(200).json({
                status: 'Avaliação atualizada com sucesso',
                avaliacao: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async criarAvaliacao(req, res) {
        const newAvaliacao = req.body;
        const result = await AvaliacaoServices_1.default.criarAvaliacao(newAvaliacao);
        if (result) {
            res.status(200).json({
                status: 'Avaliação criada com sucesso',
                avaliacao: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async deletarAvaliacao(req, res) {
        const id_avaliacao = req.params.id;
        await AvaliacaoServices_1.default.deletarAvaliacao(id_avaliacao);
        try {
            res.status(200).json({
                status: 'Avaliação deletada com sucesso',
            });
        }
        catch (error) {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
}
exports.default = new AvaliacaoController();

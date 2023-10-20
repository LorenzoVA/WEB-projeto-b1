"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EstandeServices_1 = __importDefault(require("../services/EstandeServices"));
class EstandeController {
    constructor() { }
    async listarEstande(req, res) {
        const result = await EstandeServices_1.default.listarEstande();
        if (result) {
            res.status(200).json({
                status: 'Estande listado com sucesso',
                Estande: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async atualizarEstande(req, res) {
        const estande = req.body;
        const result = await EstandeServices_1.default.atualizarEstande(estande);
        if (result) {
            res.status(200).json({
                status: 'Estande atualizado com sucesso',
                estande: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async criarEstande(req, res) {
        const newEstande = req.body;
        const result = await EstandeServices_1.default.criarEstande(newEstande);
        if (result) {
            res.status(200).json({
                status: 'Estande criado com sucesso',
                Estande: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async deletarEstande(req, res) {
        const id_estande = req.params.id;
        await EstandeServices_1.default.deletarEstande(id_estande);
        try {
            res.status(200).json({
                status: 'Estande deletado com sucesso',
            });
        }
        catch (error) {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
}
exports.default = new EstandeController();

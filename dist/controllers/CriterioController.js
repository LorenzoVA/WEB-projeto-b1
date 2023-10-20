"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CriterioServices_1 = __importDefault(require("../services/CriterioServices"));
class CriterioController {
    constructor() { }
    async listarCriterio(req, res) {
        const result = await CriterioServices_1.default.listarCriterio();
        if (result) {
            res.status(200).json({
                status: 'Critério listado com sucesso',
                Criterio: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async atualizarCriterio(req, res) {
        const criterio = req.body;
        const result = await CriterioServices_1.default.atualizarCriterio(criterio);
        if (result) {
            res.status(200).json({
                status: 'Critério atualizado com sucesso',
                criterio: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async criarCriterio(req, res) {
        const newCriterio = req.body;
        const result = await CriterioServices_1.default.criarCriterio(newCriterio);
        if (result) {
            res.status(200).json({
                status: 'Critério criado com sucesso',
                Criterio: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async deletarCriterio(req, res) {
        const id_criterio = req.params.id;
        await CriterioServices_1.default.deletarCriterio(id_criterio);
        try {
            res.status(200).json({
                status: 'Critério deletado com sucesso',
            });
        }
        catch (error) {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
}
exports.default = new CriterioController();

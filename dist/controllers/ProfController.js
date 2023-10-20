"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProfServices_1 = __importDefault(require("../services/ProfServices"));
class ProfController {
    constructor() { }
    async listarProf(req, res) {
        const result = await ProfServices_1.default.listarProf();
        if (result) {
            res.status(200).json({
                status: 'Professor listado com sucesso',
                Professor: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async atualizarProf(req, res) {
        const prof = req.body;
        const result = await ProfServices_1.default.atualizarProf(prof);
        if (result) {
            res.status(200).json({
                status: 'Professor atualizado com sucesso',
                professor: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async criarProf(req, res) {
        const newProf = req.body;
        const result = await ProfServices_1.default.criarProf(newProf);
        if (result) {
            res.status(200).json({
                status: 'Professor criado com sucesso',
                Professor: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async deletarProf(req, res) {
        const id_prof = req.params.id;
        await ProfServices_1.default.deletarProf(id_prof);
        try {
            res.status(200).json({
                status: 'Professor deletado com sucesso',
            });
        }
        catch (error) {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
}
exports.default = new ProfController();

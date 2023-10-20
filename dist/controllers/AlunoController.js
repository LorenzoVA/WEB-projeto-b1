"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AlunoServices_1 = __importDefault(require("../services/AlunoServices"));
class AlunoController {
    constructor() { }
    async listarAluno(req, res) {
        const result = await AlunoServices_1.default.listarAluno();
        if (result) {
            res.status(200).json({
                status: 'Aluno listado com sucesso',
                aluno: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async atualizarAluno(req, res) {
        const aluno = req.body;
        const result = await AlunoServices_1.default.atualizarAluno(aluno);
        if (result) {
            res.status(200).json({
                status: 'Aluno atualizado com sucesso',
                aluno: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async criarAluno(req, res) {
        const newAluno = req.body;
        const result = await AlunoServices_1.default.criarAluno(newAluno);
        if (result) {
            res.status(200).json({
                status: 'Aluno criado com sucesso',
                aluno: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async deletarAluno(req, res) {
        const id_aluno = req.params.id;
        await AlunoServices_1.default.deletarAluno(id_aluno);
        try {
            res.status(200).json({
                status: 'Aluno deletado com sucesso',
            });
        }
        catch (error) {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
}
exports.default = new AlunoController();

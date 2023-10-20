"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GrupoServices_1 = __importDefault(require("../services/GrupoServices"));
class GrupoController {
    constructor() { }
    async listarGrupo(req, res) {
        const result = await GrupoServices_1.default.listarGrupo();
        if (result) {
            res.status(200).json({
                status: 'Grupo listado com sucesso',
                Grupo: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async atualizarGrupo(req, res) {
        const grupo = req.body;
        const result = await GrupoServices_1.default.atualizarGrupo(grupo);
        if (result) {
            res.status(200).json({
                status: 'Grupo atualizado com sucesso',
                grupo: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async criarGrupo(req, res) {
        const newGrupo = req.body;
        const result = await GrupoServices_1.default.criarGrupo(newGrupo);
        if (result) {
            res.status(200).json({
                status: 'Grupo criado com sucesso',
                Grupo: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async deletarGrupo(req, res) {
        const id_grp = req.params.id;
        await GrupoServices_1.default.deletarGrupo(id_grp);
        try {
            res.status(200).json({
                status: 'Grupo deletado com sucesso',
            });
        }
        catch (error) {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
}
exports.default = new GrupoController();

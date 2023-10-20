"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GrupoController_1 = __importDefault(require("../controllers/GrupoController"));
const GrupoRouter = (0, express_1.Router)();
GrupoRouter.get('/grupo', GrupoController_1.default.listarGrupo);
GrupoRouter.get('/grupo/:id_grp', GrupoController_1.default.listarGrupo);
GrupoRouter.post('/grupo', GrupoController_1.default.criarGrupo);
GrupoRouter.patch('/grupo/:id_grp', GrupoController_1.default.atualizarGrupo);
GrupoRouter.delete('/grupo/:id_grp', GrupoController_1.default.deletarGrupo);
exports.default = GrupoRouter;

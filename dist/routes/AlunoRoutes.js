"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AlunoController_1 = __importDefault(require("../controllers/AlunoController"));
const AlunoRouter = (0, express_1.Router)();
AlunoRouter.get('/aluno', AlunoController_1.default.listarAluno);
AlunoRouter.get('/aluno/:id_aluno', AlunoController_1.default.listarAluno);
AlunoRouter.post('/aluno', AlunoController_1.default.criarAluno);
AlunoRouter.patch('/aluno/:id_aluno', AlunoController_1.default.atualizarAluno);
AlunoRouter.delete('/aluno/:id_aluno', AlunoController_1.default.deletarAluno);
exports.default = AlunoRouter;

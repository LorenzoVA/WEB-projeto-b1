"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AvaliacaoController_1 = __importDefault(require("../controllers/AvaliacaoController"));
const AvaliacaoRouter = (0, express_1.Router)();
AvaliacaoRouter.get('/avaliacao', AvaliacaoController_1.default.listarAvaliacao);
AvaliacaoRouter.get('/avaliacao/:id_avaliacao', AvaliacaoController_1.default.listarAvaliacao);
AvaliacaoRouter.post('/avaliacao', AvaliacaoController_1.default.criarAvaliacao);
AvaliacaoRouter.patch('/avaliacao/:id_avaliacao', AvaliacaoController_1.default.atualizarAvaliacao);
AvaliacaoRouter.delete('/avaliacao/:id_avaliacao', AvaliacaoController_1.default.deletarAvaliacao);
exports.default = AvaliacaoRouter;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CriterioController_1 = __importDefault(require("../controllers/CriterioController"));
const CriterioRouter = (0, express_1.Router)();
CriterioRouter.get('/criterio', CriterioController_1.default.listarCriterio);
CriterioRouter.get('/criterio/:id_crit', CriterioController_1.default.listarCriterio);
CriterioRouter.post('/criterio', CriterioController_1.default.criarCriterio);
CriterioRouter.patch('/criterio/:id_criterio', CriterioController_1.default.atualizarCriterio);
CriterioRouter.delete('/criterio/:id_criterio', CriterioController_1.default.deletarCriterio);
exports.default = CriterioRouter;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EstandeController_1 = __importDefault(require("../controllers/EstandeController"));
const EstandeRouter = (0, express_1.Router)();
EstandeRouter.get('/estande', EstandeController_1.default.listarEstande);
EstandeRouter.get('/estande/:id_estande', EstandeController_1.default.listarEstande);
EstandeRouter.post('/estande', EstandeController_1.default.criarEstande);
EstandeRouter.patch('/estande/:id_estande', EstandeController_1.default.atualizarEstande);
EstandeRouter.delete('/estande/:id_estande', EstandeController_1.default.deletarEstande);
exports.default = EstandeRouter;

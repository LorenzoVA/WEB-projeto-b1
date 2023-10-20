"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProfController_1 = __importDefault(require("../controllers/ProfController"));
const ProfRouter = (0, express_1.Router)();
ProfRouter.get('/prof', ProfController_1.default.listarProf);
ProfRouter.get('/prof/:id_prof', ProfController_1.default.listarProf);
ProfRouter.post('/prof', ProfController_1.default.criarProf);
ProfRouter.patch('/prof/:id_prof', ProfController_1.default.atualizarProf);
ProfRouter.delete('/prof/:id_prof', ProfController_1.default.deletarProf);
exports.default = ProfRouter;

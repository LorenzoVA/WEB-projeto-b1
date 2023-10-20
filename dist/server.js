"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const AlunoRoutes_1 = __importDefault(require("./routes/AlunoRoutes"));
const AvaliacaoRoutes_1 = __importDefault(require("./routes/AvaliacaoRoutes"));
const CriterioRoutes_1 = __importDefault(require("./routes/CriterioRoutes"));
const EstandeRoutes_1 = __importDefault(require("./routes/EstandeRoutes"));
const GrupoRoutes_1 = __importDefault(require("./routes/GrupoRoutes"));
const ProfRoutes_1 = __importDefault(require("./routes/ProfRoutes"));
dotenv_1.default.config({ path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env' });
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', AlunoRoutes_1.default);
app.use('/api', AvaliacaoRoutes_1.default);
app.use('/api', CriterioRoutes_1.default);
app.use('/api', EstandeRoutes_1.default);
app.use('/api', GrupoRoutes_1.default);
app.use('/api', ProfRoutes_1.default);
if (process.env.PORT) {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
}
else {
    console.log('Fail to load environment');
}

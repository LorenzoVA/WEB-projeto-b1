import { Router } from 'express';
import EstandeController from '../controllers/EstandeController';

const EstandeRouter = Router();

EstandeRouter.get('/estande', EstandeController.listarEstande);

EstandeRouter.get('/estande/:id_estande', EstandeController.listarEstande);

EstandeRouter.post('/estande', EstandeController.criarEstande);

EstandeRouter.patch('/estande/:id_estande', EstandeController.atualizarEstande);

EstandeRouter.delete('/estande/:id_estande', EstandeController.deletarEstande);

export default EstandeRouter;
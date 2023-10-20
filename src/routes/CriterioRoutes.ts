import { Router } from 'express';
import CriterioController from '../controllers/CriterioController';

const CriterioRouter = Router();

CriterioRouter.get('/criterio', CriterioController.listarCriterio);

CriterioRouter.get('/criterio/:id_crit', CriterioController.listarCriterio);

CriterioRouter.post('/criterio', CriterioController.criarCriterio);

CriterioRouter.patch('/criterio/:id_criterio', CriterioController.atualizarCriterio);

CriterioRouter.delete('/criterio/:id_criterio', CriterioController.deletarCriterio);

export default CriterioRouter;
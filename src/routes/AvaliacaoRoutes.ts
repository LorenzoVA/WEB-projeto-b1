import { Router } from 'express';
import AvaliacaoController from '../controllers/AvaliacaoController';

const AvaliacaoRouter = Router();

AvaliacaoRouter.get('/avaliacao', AvaliacaoController.listarAvaliacao);

AvaliacaoRouter.get('/avaliacao/:id_avaliacao', AvaliacaoController.listarAvaliacao);

AvaliacaoRouter.post('/avaliacao', AvaliacaoController.criarAvaliacao);

AvaliacaoRouter.patch('/avaliacao/:id_avaliacao', AvaliacaoController.atualizarAvaliacao);

AvaliacaoRouter.delete('/avaliacao/:id_avaliacao', AvaliacaoController.deletarAvaliacao);

export default AvaliacaoRouter;
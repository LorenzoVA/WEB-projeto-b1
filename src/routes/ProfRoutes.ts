import { Router } from 'express';
import ProfController from '../controllers/ProfController';

const ProfRouter = Router();

ProfRouter.get('/prof', ProfController.listarProf);

ProfRouter.get('/prof/:id_prof', ProfController.listarProf);

ProfRouter.post('/prof', ProfController.criarProf);

ProfRouter.patch('/prof/:id_prof', ProfController.atualizarProf);

ProfRouter.delete('/prof/:id_prof', ProfController.deletarProf);

export default ProfRouter;
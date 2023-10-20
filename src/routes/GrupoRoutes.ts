import { Router } from 'express';
import GrupoController from '../controllers/GrupoController';

const GrupoRouter = Router();

GrupoRouter.get('/grupo', GrupoController.listarGrupo);

GrupoRouter.get('/grupo/:id_grp', GrupoController.listarGrupo);

GrupoRouter.post('/grupo', GrupoController.criarGrupo);

GrupoRouter.patch('/grupo/:id_grp', GrupoController.atualizarGrupo);

GrupoRouter.delete('/grupo/:id_grp', GrupoController.deletarGrupo);

export default GrupoRouter;
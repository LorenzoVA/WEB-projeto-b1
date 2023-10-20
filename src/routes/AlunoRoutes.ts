import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';

const AlunoRouter = Router();

AlunoRouter.get('/aluno', AlunoController.listarAluno);

AlunoRouter.get('/aluno/:id_aluno', AlunoController.listarAluno);

AlunoRouter.post('/aluno', AlunoController.criarAluno);

AlunoRouter.patch('/aluno/:id_aluno', AlunoController.atualizarAluno);

AlunoRouter.delete('/aluno/:id_aluno', AlunoController.deletarAluno);

export default AlunoRouter;

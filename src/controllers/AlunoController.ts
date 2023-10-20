import { Aluno } from '@prisma/client';
import { Request, Response } from 'express';
import AlunoServices from '../services/AlunoServices';

class AlunoController {
  constructor() {}

  async listarAluno(req: Request, res: Response) {
    const result = await AlunoServices.listarAluno();
    if (result) {
      res.status(200).json({
        status: 'Aluno listado com sucesso',
        aluno: result,
      });
    } else {
      res.status(500).json({
        status: 'erro',
      });
    }
  }

  async atualizarAluno(req: Request, res: Response) {
    const aluno: Aluno = req.body;
    const result = await AlunoServices.atualizarAluno(aluno);
    if (result) {
      res.status(200).json({
        status: 'Aluno atualizado com sucesso',
        aluno: result,
      });
    } else {
      res.status(500).json({
        status: 'erro',
      });
    }
  }

  async criarAluno(req: Request, res: Response) {
    const newAluno: Aluno = req.body;
    const result = await AlunoServices.criarAluno(newAluno);
    if (result) {
      res.status(200).json({
        status: 'Aluno criado com sucesso',
        aluno: result,
      });
    } else {
      res.status(500).json({
        status: 'erro',
      });
    }
  }

  async deletarAluno(req: Request, res: Response) {
    const id_aluno: string = req.params.id;
    await AlunoServices.deletarAluno(id_aluno);
    try {
      res.status(200).json({
        status: 'Aluno deletado com sucesso',
      });
    } catch (error) {
      res.status(500).json({
        status: 'erro',
      });
    }
  }
}

export default new AlunoController();

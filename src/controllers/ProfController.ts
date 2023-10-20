import { Professor } from '@prisma/client';
import { Request, Response } from 'express';
import ProfServices from '../services/ProfServices';

class ProfController {
  constructor() {}

  async listarProf(req: Request, res: Response) {
    const result = await ProfServices.listarProf();
    if (result) {
      res.status(200).json({
        status: 'Professor listado com sucesso',
        Professor: result,
      });
    } else {
      res.status(500).json({
        status: 'erro',
      });
    }
  }

  async atualizarProf(req: Request, res: Response) {
    const prof: Professor = req.body;
    const result = await ProfServices.atualizarProf(prof);
    if (result) {
      res.status(200).json({
        status: 'Professor atualizado com sucesso',
        professor: result,
      });
    } else {
      res.status(500).json({
        status: 'erro',
      });
    }
  }

  async criarProf(req: Request, res: Response) {
    const newProf: Professor = req.body;
    const result = await ProfServices.criarProf(newProf);
    if (result) {
      res.status(200).json({
        status: 'Professor criado com sucesso',
        Professor: result,
      });
    } else {
      res.status(500).json({
        status: 'erro',
      });
    }
  }

  async deletarProf(req: Request, res: Response) {
    const id_prof: string = req.params.id;
    await ProfServices.deletarProf(id_prof);
    try {
      res.status(200).json({
        status: 'Professor deletado com sucesso',
      });
    } catch (error) {
      res.status(500).json({
        status: 'erro',
      });
    }
  }
}

export default new ProfController();

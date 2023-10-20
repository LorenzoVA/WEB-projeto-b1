import { Criterios } from '@prisma/client';
import { Request, Response } from 'express';
import CriterioServices from '../services/CriterioServices';

class CriterioController {
  constructor() {}

  async listarCriterio(req: Request, res: Response) {
    const result = await CriterioServices.listarCriterio();
    if (result) {
      res.status(200).json({
        status: 'Critério listado com sucesso',
        Criterio: result,
      });
    } else {
      res.status(500).json({
        status: 'erro',
      });
    }
  }

  async atualizarCriterio(req: Request, res: Response) {
    const criterio: Criterios = req.body;
    const result = await CriterioServices.atualizarCriterio(criterio);
    if (result) {
      res.status(200).json({
        status: 'Critério atualizado com sucesso',
        criterio: result,
      });
    } else {
      res.status(500).json({
        status: 'erro',
      });
    }
  }

  async criarCriterio(req: Request, res: Response) {
    const newCriterio: Criterios = req.body;
    const result = await CriterioServices.criarCriterio(newCriterio);
    if (result) {
      res.status(200).json({
        status: 'Critério criado com sucesso',
        Criterio: result,
      });
    } else {
      res.status(500).json({
        status: 'erro',
      });
    }
  }

  async deletarCriterio(req: Request, res: Response) {
    const id_criterio: string = req.params.id;
    await CriterioServices.deletarCriterio(id_criterio);
    try {
      res.status(200).json({
        status: 'Critério deletado com sucesso',
      });
    } catch (error) {
      res.status(500).json({
        status: 'erro',
      });
    }
  }
}

export default new CriterioController();

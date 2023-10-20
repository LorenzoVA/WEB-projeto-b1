import { Estande } from '@prisma/client';
import { Request, Response } from 'express';
import EstandeServices from '../services/EstandeServices';

class EstandeController {
  constructor() {}

  async listarEstande(req: Request, res: Response) {
    const result = await EstandeServices.listarEstande();
    if (result) {
      res.status(200).json({
        status: 'Estande listado com sucesso',
        Estande: result,
      });
    } else {
      res.status(500).json({
        status: 'erro',
      });
    }
  }

  async atualizarEstande(req: Request, res: Response) {
    const estande: Estande = req.body;
    const result = await EstandeServices.atualizarEstande(estande);
    if (result) {
      res.status(200).json({
        status: 'Estande atualizado com sucesso',
        estande: result,
      });
    } else {
      res.status(500).json({
        status: 'erro',
      });
    }
  }

  async criarEstande(req: Request, res: Response) {
    const newEstande: Estande = req.body;
    const result = await EstandeServices.criarEstande(newEstande);
    if (result) {
      res.status(200).json({
        status: 'Estande criado com sucesso',
        estande: result,
      });
    } else {
      res.status(500).json({
        status: 'erro',
      });
    }
  }

  async deletarEstande(req: Request, res: Response) {
    const id_estande: string = req.params.id;
    await EstandeServices.deletarEstande(id_estande);
    try {
      res.status(200).json({
        status: 'Estande deletado com sucesso',
      });
    } catch (error) {
      res.status(500).json({
        status: 'erro',
      });
    }
  }
}

export default new EstandeController();

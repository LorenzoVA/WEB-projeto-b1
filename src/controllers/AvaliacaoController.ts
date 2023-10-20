import { Avaliacao } from '@prisma/client';
import { Request, Response } from 'express';
import AvaliacaoServices from '../services/AvaliacaoServices';

class AvaliacaoController {
  constructor() {}

  async listarAvaliacao(req: Request, res: Response) {
    const result = await AvaliacaoServices.listarAvaliacao();
    if (result) {
      res.status(200).json({
        status: 'Avaliação listada com sucesso',
        avaliacao: result,
      });
    } else {
      res.status(500).json({
        status: 'erro',
      });
    }
  }

  async atualizarAvaliacao(req: Request, res: Response) {
    const avaliacao: Avaliacao = req.body;
    const result = await AvaliacaoServices.atualizarAvaliacao(avaliacao);
    if (result) {
      res.status(200).json({
        status: 'Avaliação atualizada com sucesso',
        avaliacao: result,
      });
    } else {
      res.status(500).json({
        status: 'erro',
      });
    }
  }

  async criarAvaliacao(req: Request, res: Response) {
    const newAvaliacao: Avaliacao = req.body;
    const result = await AvaliacaoServices.criarAvaliacao(newAvaliacao);
    if (result) {
      res.status(200).json({
        status: 'Avaliação criada com sucesso',
        avaliacao: result,
      });
    } else {
      res.status(500).json({
        status: 'erro',
      });
    }
  }

  async deletarAvaliacao(req: Request, res: Response) {
    const id_avaliacao: string = req.params.id;
    await AvaliacaoServices.deletarAvaliacao(id_avaliacao);
    try {
      res.status(200).json({
        status: 'Avaliação deletada com sucesso',
      });
    } catch (error) {
      res.status(500).json({
        status: 'erro',
      });
    }
  }
}

export default new AvaliacaoController();

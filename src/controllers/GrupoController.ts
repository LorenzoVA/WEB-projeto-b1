import { Grupo } from '@prisma/client';
import { Request, Response } from 'express';
import GrupoServices from '../services/GrupoServices';

class GrupoController {
  constructor() {}

  async listarGrupo(req: Request, res: Response) {
    const result = await GrupoServices.listarGrupo();
    if (result) {
      res.status(200).json({
        status: 'Grupo listado com sucesso',
        Grupo: result,
      });
    } else {
      res.status(500).json({
        status: 'erro',
      });
    }
  }

  async atualizarGrupo(req: Request, res: Response) {
    const grupo: Grupo = req.body;
    const result = await GrupoServices.atualizarGrupo(grupo);
    if (result) {
      res.status(200).json({
        status: 'Grupo atualizado com sucesso',
        grupo: result,
      });
    } else {
      res.status(500).json({
        status: 'erro',
      });
    }
  }

  async criarGrupo(req: Request, res: Response) {
    const newGrupo: Grupo = req.body;
    const result = await GrupoServices.criarGrupo(newGrupo);
    if (result) {
      res.status(200).json({
        status: 'Grupo criado com sucesso',
        Grupo: result,
      });
    } else {
      res.status(500).json({
        status: 'erro',
      });
    }
  }

  async deletarGrupo(req: Request, res: Response) {
    const id_grp: string = req.params.id;
    await GrupoServices.deletarGrupo(id_grp);
    try {
      res.status(200).json({
        status: 'Grupo deletado com sucesso',
      });
    } catch (error) {
      res.status(500).json({
        status: 'erro',
      });
    }
  }
}

export default new GrupoController();

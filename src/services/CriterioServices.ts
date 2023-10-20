import { PrismaClient, Criterios } from '@prisma/client';

const prisma = new PrismaClient();

class CriterioServices {
  constructor() {}

  async listarCriterio() {
    try {
      const criterio = await prisma.criterios.findMany();
      return criterio;
    } catch (error) {
      console.log(error);
    }
  }

  async criarCriterio(newCriterio: Criterios) {
    try {
      const criterio = await prisma.criterios.create({
        data: newCriterio,
      });
      return criterio;
    } catch (error) {
      console.log(error);
    }
  }

  async atualizarCriterio(upCriterio: Criterios) {
    try {
      const { id_crit, ...rest } = upCriterio;
      const criterio = await prisma.criterios.update({
        where: { id_crit: id_crit },
        data: { ...rest },
      });
      return criterio;
    } catch (error) {
      console.log(error);
    }
  }

  async deletarCriterio(id_crit: string) {
    try {
      await prisma.criterios.delete({
        where: { id_crit: id_crit },
      });
      return console.log('Critério Deletado');
    } catch (error) {
      console.log(error);
    }
  }
}

export default new CriterioServices();

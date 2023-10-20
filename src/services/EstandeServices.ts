import { PrismaClient, Estande } from '@prisma/client';

const prisma = new PrismaClient();

class EstandeServices {
  constructor() {}

  async listarEstande() {
    try {
      const estande = await prisma.estande.findMany();
      return estande;
    } catch (error) {
      console.log(error);
    }
  }

  async criarEstande(newEstande: Estande) {
    try {
      const estande = await prisma.estande.create({
        data: newEstande,
      });
      return estande;
    } catch (error) {
      console.log(error);
    }
  }

  async atualizarEstande(upEstande: Estande) {
    try {
      const { id_estande, ...rest } = upEstande;
      const estande = await prisma.estande.update({
        where: { id_estande: id_estande },
        data: { ...rest },
      });
      return estande;
    } catch (error) {
      console.log(error);
    }
  }

  async deletarEstande(id_estande: string) {
    try {
      await prisma.estande.delete({
        where: { id_estande: id_estande },
      });
      return console.log('Estande Deletado');
    } catch (error) {
      console.log(error);
    }
  }
}

export default new EstandeServices();

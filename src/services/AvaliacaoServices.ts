import { PrismaClient, Avaliacao } from '@prisma/client';

const prisma = new PrismaClient();

class AvaliacaoServices {
  constructor() {}

  async listarAvaliacao() {
    try {
      const avaliacao = await prisma.avaliacao.findMany();
      return avaliacao;
    } catch (error) {
      console.log(error);
    }
  }

  async criarAvaliacao(newAvaliacao: Avaliacao) {
    try {
      const avaliacao = await prisma.avaliacao.create({
        data: newAvaliacao,
      });
      return avaliacao;
    } catch (error) {
      console.log(error);
    }
  }

  async atualizarAvaliacao(upAvaliacao: Avaliacao) {
    try {
      const { id_avaliacao, ...rest } = upAvaliacao;
      const avaliacao = await prisma.avaliacao.update({
        where: { id_avaliacao: id_avaliacao },
        data: { ...rest },
      });
      return avaliacao;
    } catch (error) {
      console.log(error);
    }
  }

  async deletarAvaliacao(id_avaliacao: string) {
    try {
      await prisma.avaliacao.delete({
        where: { id_avaliacao: id_avaliacao },
      });
      return console.log('Avaliação Deletada');
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AvaliacaoServices();

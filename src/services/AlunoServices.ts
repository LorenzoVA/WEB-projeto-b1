import { PrismaClient, Aluno } from '@prisma/client';

const prisma = new PrismaClient();

class AlunoServices {
  constructor() {}

  async listarAluno() {
    try {
      const aluno = await prisma.aluno.findMany();
      return aluno;
    } catch (error) {
      console.log(error);
    }
  }

  async criarAluno(newAluno: Aluno) {
    try {
      const aluno = await prisma.aluno.create({
        data: newAluno,
      });
      return aluno;
    } catch (error) {
      console.log(error);
    }
  }

  async atualizarAluno(upAluno: Aluno) {
    try {
      const { id_aluno, ...rest } = upAluno;
      const aluno = await prisma.aluno.update({
        where: { id_aluno: id_aluno },
        data: { ...rest },
      });
      return aluno;
    } catch (error) {
      console.log(error);
    }
  }

  async deletarAluno(id_aluno: string) {
    try {
      await prisma.aluno.delete({
        where: { id_aluno: id_aluno },
      });
      return console.log('aluno Deletado');
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AlunoServices();

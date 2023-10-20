"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class AlunoServices {
    constructor() { }
    async listarAluno() {
        try {
            const aluno = await prisma.aluno.findMany();
            return aluno;
        }
        catch (error) {
            console.log(error);
        }
    }
    async criarAluno(newAluno) {
        try {
            const aluno = await prisma.aluno.create({
                data: newAluno,
            });
            return aluno;
        }
        catch (error) {
            console.log(error);
        }
    }
    async atualizarAluno(upAluno) {
        try {
            const { id_aluno, ...rest } = upAluno;
            const aluno = await prisma.aluno.update({
                where: { id_aluno: id_aluno },
                data: { ...rest },
            });
            return aluno;
        }
        catch (error) {
            console.log(error);
        }
    }
    async deletarAluno(id_aluno) {
        try {
            await prisma.aluno.delete({
                where: { id_aluno: id_aluno },
            });
            return console.log('aluno Deletado');
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = new AlunoServices();

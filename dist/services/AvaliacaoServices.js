"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class AvaliacaoServices {
    constructor() { }
    async listarAvaliacao() {
        try {
            const avaliacao = await prisma.avaliacao.findMany();
            return avaliacao;
        }
        catch (error) {
            console.log(error);
        }
    }
    async criarAvaliacao(newAvaliacao) {
        try {
            const avaliacao = await prisma.avaliacao.create({
                data: newAvaliacao,
            });
            return avaliacao;
        }
        catch (error) {
            console.log(error);
        }
    }
    async atualizarAvaliacao(upAvaliacao) {
        try {
            const { id_avaliacao, ...rest } = upAvaliacao;
            const avaliacao = await prisma.avaliacao.update({
                where: { id_avaliacao: id_avaliacao },
                data: { ...rest },
            });
            return avaliacao;
        }
        catch (error) {
            console.log(error);
        }
    }
    async deletarAvaliacao(id_avaliacao) {
        try {
            await prisma.avaliacao.delete({
                where: { id_avaliacao: id_avaliacao },
            });
            return console.log('Avaliação Deletada');
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = new AvaliacaoServices();

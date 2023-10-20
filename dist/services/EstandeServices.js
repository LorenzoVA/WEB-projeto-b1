"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class EstandeServices {
    constructor() { }
    async listarEstande() {
        try {
            const estande = await prisma.estande.findMany();
            return estande;
        }
        catch (error) {
            console.log(error);
        }
    }
    async criarEstande(newEstande) {
        try {
            const estande = await prisma.estande.create({
                data: newEstande,
            });
            return estande;
        }
        catch (error) {
            console.log(error);
        }
    }
    async atualizarEstande(upEstande) {
        try {
            const { id_estande, ...rest } = upEstande;
            const estande = await prisma.estande.update({
                where: { id_estande: id_estande },
                data: { ...rest },
            });
            return estande;
        }
        catch (error) {
            console.log(error);
        }
    }
    async deletarEstande(id_estande) {
        try {
            await prisma.estande.delete({
                where: { id_estande: id_estande },
            });
            return console.log('Estande Deletado');
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = new EstandeServices();

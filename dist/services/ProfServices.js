"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ProfServices {
    constructor() { }
    async listarProf() {
        try {
            const professores = await prisma.professor.findMany();
            return professores;
        }
        catch (error) {
            console.log(error);
        }
    }
    async criarProf(newProf) {
        try {
            const professor = await prisma.professor.create({
                data: newProf,
            });
            return professor;
        }
        catch (error) {
            console.log(error);
        }
    }
    async atualizarProf(upProf) {
        try {
            const { id_prof, ...rest } = upProf;
            const professor = await prisma.professor.update({
                where: { id_prof: id_prof },
                data: { ...rest },
            });
            return professor;
        }
        catch (error) {
            console.log(error);
        }
    }
    async deletarProf(id_prof) {
        try {
            await prisma.professor.delete({
                where: { id_prof: id_prof },
            });
            return console.log('Professor Deletado');
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = new ProfServices();

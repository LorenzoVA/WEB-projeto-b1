"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class GrupoServices {
    constructor() { }
    async listarGrupo() {
        try {
            const grupo = await prisma.grupo.findMany();
            return grupo;
        }
        catch (error) {
            console.log(error);
        }
    }
    async criarGrupo(newGrupo) {
        try {
            const grupo = await prisma.grupo.create({
                data: newGrupo,
            });
            return grupo;
        }
        catch (error) {
            console.log(error);
        }
    }
    async atualizarGrupo(upGrupo) {
        try {
            const { id_grp, ...rest } = upGrupo;
            const grupo = await prisma.grupo.update({
                where: { id_grp: id_grp },
                data: { ...rest },
            });
            return grupo;
        }
        catch (error) {
            console.log(error);
        }
    }
    async deletarGrupo(id_grp) {
        try {
            await prisma.grupo.delete({
                where: { id_grp: id_grp },
            });
            return console.log('Grupo Deletado');
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = new GrupoServices();

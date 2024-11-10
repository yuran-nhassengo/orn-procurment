import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient();

export const getAllCategories = async  () =>{

    const Categorias = await prisma.categoria.findMany();

    return Categorias;
}

export const createCategory = async (nome:string) => {

        const categoria = await prisma.categoria.create({
            data:{
                nome
            }
        })

        return categoria
};
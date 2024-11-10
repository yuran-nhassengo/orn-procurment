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

        return categoria;
};

export const updateCategoria = async (
    id:string,
    data:{
        nome?:string
    }
) => {
        const categoria = await prisma.categoria.update({
            where:{id},
            data
        }) 

        return categoria;
};

export const deleteCategoria = async (id: string) =>{
    const categoria = await prisma.categoria.delete({
        where:{id}
    });

    return categoria;
};
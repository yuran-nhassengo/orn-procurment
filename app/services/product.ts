import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


export const getAllProducts = async () => {

    const productos = await prisma.produto.findMany();

    return productos;
  
};



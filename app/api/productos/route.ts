import { getAllProducts } from "@/app/services/product";
import { NextResponse } from "next/server";




export async function GET () {

    try{
        const productos = await getAllProducts();
        return NextResponse.json(productos);
    }catch(erro){

        return NextResponse.json({error:`Erro ${erro}`},{status:500});

    }
}
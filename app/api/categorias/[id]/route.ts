import { getCategoriaById } from "@/app/services/categoria";
import { NextResponse } from "next/server";


export async function GET({params}:{params:{id:string}}) {
    
        try{
            const categoria = await getCategoriaById(params.id)

            if(!categoria){
                return NextResponse.json({error: `Producto não encontrado`},{status:404});


            }

            return NextResponse.json(categoria);
        }catch(error){
            return NextResponse.json({error:`erro ${error}`},{status:500});
        }
}
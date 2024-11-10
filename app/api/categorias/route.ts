import { createCategory, deleteCategoria, getAllCategories, updateCategoria } from "@/app/services/categoria";
import { NextResponse } from "next/server";



export async function GET() {

    try {
        const categorias = await getAllCategories();
        return NextResponse.json(categorias);
    }catch(error){
        return NextResponse.json({error: `Erro ${error}`},{status:500});
    }
}

export async function POST(request: Request) {
    const body = await request.json();

    try{
        const {nome} = body;

        const newCategoria = await createCategory(nome);
        return NextResponse.json(newCategoria,{status:201});

    }catch(error){
        return NextResponse.json({error:`erro ${error}`},{status:500});
    }
}

export async function PUT(request:Request,{params}:{params: {id:string}}){
    const body = await request.json();

    try {
        const updateCategor = await updateCategoria((params.id),body);
        return NextResponse.json(updateCategor);
    }catch (error){
        return NextResponse.json({error:`erro ${error}`},{status:500});
    }
}

export async function DELETE({params}:{params:{id: string}}){
    try {
        const deleteCateg = await deleteCategoria((params.id));
        return NextResponse.json(deleteCateg);
    }catch(error){
        return NextResponse.json({error:`erro ${error}`},{status:500});
    }
}
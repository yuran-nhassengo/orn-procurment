
export interface Produto {
    id: string;
    nome: string;
    descricao?: string | null;  
    preco: number;
    estoque: number;
    categoriaId: string;
    fornecedorId: string;
    categoria: Categoria;
    fornecedor: Fornecedor;
    createdAt: Date;
    updatedAt: Date;
  }
  
 
  export interface Categoria {
    id: string;
    nome: string;
    produtos: Produto[];  
    createdAt: Date;
    updatedAt: Date;
  }

  // Tipagem de Props
export interface FaqProps {
  page: "home" | "inbox" | "calendar" | "search" | "settings" | "procurement";
}

export interface FaqItem {
  question: string;
  answer: string;
}
  
  
  export interface Fornecedor {
    id: string;
    nome: string;
    bi?: string | null;   
    telefone?: string | null; 
    email?: string | null;    
    produtos: Produto[];     
    createdAt: Date;
    updatedAt: Date;
  }
  

  export interface Usuario {
    id: string;
    nome: string;
    email: string;
    senha: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
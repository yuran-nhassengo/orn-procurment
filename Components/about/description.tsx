import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import Imgem from "../../images/electric-4198293_1280.jpg";

function Description() {
  return (
    <div className='flex flex-col justify-center items-center mt-24 relative'>
      <div className="relative w-full h-[600px]"> 
        <Image 
          src={Imgem} 
          alt="Descrição da Imagem" 
          layout="fill" 
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className='text-gray-900 text-2xl mb-4'> 
          Orn Eletróferragem é uma referência em Moçambique, com mais de 10 anos de 
          experiência no fornecimento de materiais eletrônicos de alta qualidade e serviços especializados. 
          Nossa missão é atender às necessidades dos nossos clientes com excelência,
          oferecendo soluções inovadoras e personalizadas no setor elétrico. Com uma equipe 
          qualificada e comprometida, 
          garantimos que nossos produtos e serviços atendam aos mais altos padrões de qualidade 
          e confiabilidade.
        </p>
        <Button className="hover:bg-white border-black hover:border-2 hover:text-black">
          Contacte-nos
        </Button>
      </div>
    </div>
  );
}

export default Description;

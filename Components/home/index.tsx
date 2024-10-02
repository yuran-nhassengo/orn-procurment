'use client'
import React from 'react';
import TypingEffect from './introd'; 

export const HomeIntr = () => {
  const introductionText = `
    Orn Eletróferragem é uma referência em Moçambique, com mais de 10 anos de 
    experiência no fornecimento de materiais eletrônicos de alta qualidade e serviços especializados. 
    Nossa missão é atender às necessidades dos nossos clientes com excelência,
    oferecendo soluções inovadoras e personalizadas no setor elétrico. Com uma equipe qualificada e comprometida, 
    garantimos que nossos produtos e serviços atendam aos mais altos padrões de qualidade e confiabilidade.
  `;

  return (
    <div className='flex pt-8'>
      <div className='flex-1 text-center'>
        <p className='justify'>
          <strong className='animate-ping'>Orn Eletróferragem</strong> 
          <TypingEffect text={introductionText} />
        </p>
      </div>
      <div className='flex-1'>
        <img src="URL_DA_IMAGEM" alt="Descrição da imagem" className='w-full h-auto' />
      </div>
    </div>
  );
};

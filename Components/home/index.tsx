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
    <div className='pt-8 text-center justify-'>
       <p className='text-center justify'>
        <strong>Orn Eletróferragem</strong> <TypingEffect text={introductionText} />
      </p>
    </div>
  );
};



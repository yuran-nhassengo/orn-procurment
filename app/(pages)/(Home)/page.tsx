import React from 'react';
import {HomeIntr} from '../../../Components/home/index'

const Home = () => {
  return (
    <div className='pt-24'>
     <div className='flex justify-between'>
       <h1 className='font-bold text-blue-600'>Introdução à Empresa</h1>
      <HomeIntr/>
      
      </div>
      <div>
        <h2>Destaques</h2>
      <ul>
        <li><strong>Descontos em Materiais Eletrônicos:</strong> Aproveite até 20% de desconto em componentes eletrônicos selecionados!</li>
        <li><strong>Serviço de Montagem de Painéis:</strong> Contrate nosso serviço de montagem e ganhe um desconto exclusivo 
        em sua próxima compra de materiais.</li>
        <li><strong>Consultoria Gratuita:</strong> Faça uma consulta gratuita sobre seus projetos elétricos e receba orientação 
        de nossos especialistas.</li>
      </ul>

      <h2>Serviços</h2>
      <ul>
        <li><strong>Venda de Materiais Eletrônicos:</strong> Fornecemos uma variedade de componentes eletrônicos, desde resistores 
        e capacitores até painéis solares e equipamentos de automação.</li>
        <li><strong>Montagem de Painéis:</strong> Realizamos a montagem e configuração de painéis elétricos sob medida para sua 
        aplicação, garantindo eficiência e segurança.</li>
        <li><strong>Serviços de Eletricidade:</strong> Oferecemos serviços de instalação elétrica, manutenção e reparo, sempre
         com foco na segurança e na qualidade do trabalho.</li>
        <li><strong>Procurement:</strong> Atuamos na busca e fornecimento de materiais eletrônicos específicos, facilitando a 
        aquisição de produtos raros ou de alta demanda.</li>
      </ul>

      <h2>Contactos</h2>
      <p>
        Entre em contato conosco para mais informações sobre nossos produtos e serviços:
      </p>
      <ul>
        <li><strong>Endereço:</strong> Rua da Eletricidade, 123, Maputo, Moçambique</li>
        <li><strong>Telefone:</strong> +258 21 123 456</li>
        <li><strong>Email:</strong> contato@orneletrferragem.co.mz</li>
        <li><strong>Website:</strong> www.orneletrferragem.co.mz</li>
        <li><strong>Horário de Funcionamento:</strong> Segunda a Sexta, das 08h às 17h</li>
      </ul>
      </div>
    </div>
    
  );
};

export default Home;
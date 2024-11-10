import Contact from '@/Components/contact';
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">
      {/* Seção de Banner */}
      <section className="text-center py-12 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Sobre Nós</h1>
        <p className="text-lg">
          Conheça nossa história, visão e compromisso com a excelência em fornecimento de materiais elétricos.
        </p>
      </section>

      {/* Seção Visão e Missão */}
      <section className="max-w-4xl mx-auto py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-blue-600">Nossa Visão e Missão</h2>
          <p className="text-gray-700 mt-2">
            Estamos aqui para fornecer as melhores soluções elétricas em Moçambique, com produtos de qualidade e atendimento de excelência.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">Visão</h3>
            <p className="text-gray-700 mt-2">
              Ser a referência em fornecimento de materiais elétricos em Moçambique, reconhecida pela qualidade dos nossos produtos, pela eficiência dos nossos serviços e pela excelência no atendimento ao cliente.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">Missão</h3>
            <p className="text-gray-700 mt-2">
              Nossa missão é fornecer soluções elétricas inovadoras e de alta qualidade, garantindo a satisfação de nossos clientes através de produtos confiáveis e um atendimento excepcional.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Como Ajudamos da Melhor Maneira */}
      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-2xl font-semibold text-blue-600 text-center mb-8">Como Ajudamos da Melhor Maneira</h2>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600">Atendimento Personalizado</h3>
          <p className="text-gray-700 mt-2">
            Priorizamos o atendimento personalizado, oferecendo soluções sob medida que atendem às suas necessidades específicas. Nossa equipe de especialistas trabalha de perto com você para garantir os melhores resultados em cada etapa do seu projeto.
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold text-blue-600">Produtos de Alta Qualidade</h3>
          <p className="text-gray-700 mt-2">
            Fornecemos apenas produtos de alta qualidade, com garantia de durabilidade e desempenho superior. Trabalhamos com as melhores marcas do mercado, oferecendo confiança e segurança para cada cliente.
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold text-blue-600">Soluções Inovadoras</h3>
          <p className="text-gray-700 mt-2">
            Buscamos sempre soluções inovadoras e eficientes, adaptadas às necessidades do mercado. Nossos produtos e serviços são projetados para proporcionar o máximo de eficiência e segurança, ajudando nossos clientes a alcançar seus objetivos com sucesso.
          </p>
        </div>
      </section>

      {/* Seção de Clientes */}
      <section className="bg-gray-50 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-blue-600">Nossos Clientes</h2>
          <p className="text-lg text-gray-700">Empresas que confiam em nós para fornecer soluções elétricas de alta qualidade.</p>
        </div>
        <div className="flex justify-center gap-8 flex-wrap">
          {/* Exemplo de Clientes */}
          <div className="w-32 h-32 bg-white shadow-lg flex justify-center items-center rounded-lg">
            <img src="/logos/empresa1-logo.png" alt="Empresa 1" className="w-24 h-24 object-contain" />
          </div>
          <div className="w-32 h-32 bg-white shadow-lg flex justify-center items-center rounded-lg">
            <img src="/logos/empresa2-logo.png" alt="Empresa 2" className="w-24 h-24 object-contain" />
          </div>
          <div className="w-32 h-32 bg-white shadow-lg flex justify-center items-center rounded-lg">
            <img src="/logos/empresa3-logo.png" alt="Empresa 3" className="w-24 h-24 object-contain" />
          </div>
          <div className="w-32 h-32 bg-white shadow-lg flex justify-center items-center rounded-lg">
            <img src="/logos/empresa4-logo.png" alt="Empresa 4" className="w-24 h-24 object-contain" />
          </div>
          {/* Adicione mais logos de clientes conforme necessário */}
        </div>
      </section>

      {/* Seção de Valores */}
      <section className="bg-gray-50 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-blue-600">Nossos Valores</h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-600">Qualidade</h3>
            <p className="text-gray-700 mt-2">Compromisso com a excelência em todos os produtos e serviços oferecidos.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-600">Inovação</h3>
            <p className="text-gray-700 mt-2">Busca constante por soluções inovadoras que atendam às necessidades do mercado.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-600">Integridade</h3>
            <p className="text-gray-700 mt-2">Transparência e ética em todas as nossas relações comerciais.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-600">Compromisso</h3>
            <p className="text-gray-700 mt-2">Foco no cliente e em suas necessidades, garantindo a melhor experiência possível.</p>
          </div>
        </div>
      </section>

      {/* Seção Equipe */}
      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-2xl font-semibold text-blue-600 text-center mb-8">Nossa Equipe</h2>
        <p className="text-gray-700 text-center mb-8">
          A <strong>Orn Eletróferragem</strong> é composta por engenheiros e técnicos experientes, prontos para auxiliar você em todas as etapas do seu projeto.
        </p>
        <div className="flex justify-center gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <img src="/images/team-member1.jpg" alt="Membro da equipe" className="rounded-full w-24 h-24 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-blue-600">Eng. Joaquim Santos</h3>
            <p className="text-gray-500">Diretor Técnico</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <img src="/images/team-member2.jpg" alt="Membro da equipe" className="rounded-full w-24 h-24 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-blue-600">Ana Silva</h3>
            <p className="text-gray-500">Consultora Comercial</p>
          </div>
          {/* Adicione mais membros conforme necessário */}
        </div>
      </section>

      {/* Seção Produtos e Logística */}
      <section className="max-w-4xl mx-auto py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Produtos de Qualidade</h2>
            <p className="text-gray-700">
              Oferecemos uma seleção de aços de alta resistência e durabilidade, provenientes das melhores marcas do mercado. Com a nossa linha de produtos, você pode ter a certeza de que está adquirindo qualidade e confiabilidade.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Logística Eficiente</h2>
            <p className="text-gray-700">
              Com uma logística eficiente, garantimos a entrega rápida e segura dos materiais em todo o país. Nossa estrutura logística é projetada para atender com agilidade, para que você nunca precise se preocupar com atrasos.
            </p>
          </div>
        </div>
      </section>
      <Contact/>
    </div>
  );
};

export default About;

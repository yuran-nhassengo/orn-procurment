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
    </div>
  );
};

export default About;

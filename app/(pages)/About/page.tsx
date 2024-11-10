import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 md:px-8 lg:px-16">
      {/* Seção de Banner */}
      <section className="text-center py-8 md:py-12 bg-blue-600 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Sobre Nós</h1>
        <p className="text-base md:text-lg">
          Conheça nossa história, visão e compromisso com a excelência em fornecimento de materiais elétricos.
        </p>
      </section>

      {/* Seção Visão e Missão */}
      <section className="max-w-4xl mx-auto py-8 md:py-12">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-600">Nossa Visão e Missão</h2>
          <p className="text-gray-700 mt-2 text-sm md:text-base">
            Estamos aqui para fornecer as melhores soluções elétricas em Moçambique, com produtos de qualidade e atendimento de excelência.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white shadow-lg p-4 md:p-6 rounded-lg">
            <h3 className="text-lg md:text-xl font-semibold text-blue-600">Visão</h3>
            <p className="text-gray-700 mt-2 text-sm md:text-base">
              Ser a referência em fornecimento de materiais elétricos em Moçambique, reconhecida pela qualidade dos nossos produtos, pela eficiência dos nossos serviços e pela excelência no atendimento ao cliente.
            </p>
          </div>
          <div className="bg-white shadow-lg p-4 md:p-6 rounded-lg">
            <h3 className="text-lg md:text-xl font-semibold text-blue-600">Missão</h3>
            <p className="text-gray-700 mt-2 text-sm md:text-base">
              Nossa missão é fornecer soluções elétricas inovadoras e de alta qualidade, garantindo a satisfação de nossos clientes através de produtos confiáveis e um atendimento excepcional.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Valores */}
      <section className="bg-gray-50 py-8 md:py-12">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-600">Nossos Valores</h2>
        </div>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {["Qualidade", "Inovação", "Integridade", "Compromisso"].map((valor, index) => (
            <div key={index} className="bg-white shadow-lg p-4 md:p-6 rounded-lg">
              <h3 className="text-md md:text-lg font-semibold text-blue-600">{valor}</h3>
              <p className="text-gray-700 mt-2 text-sm md:text-base">
                {valor === "Qualidade" && "Compromisso com a excelência em todos os produtos e serviços oferecidos."}
                {valor === "Inovação" && "Busca constante por soluções inovadoras que atendam às necessidades do mercado."}
                {valor === "Integridade" && "Transparência e ética em todas as nossas relações comerciais."}
                {valor === "Compromisso" && "Foco no cliente e em suas necessidades, garantindo a melhor experiência possível."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção Equipe */}
      <section className="max-w-4xl mx-auto py-8 md:py-12">
        <h2 className="text-xl md:text-2xl font-semibold text-blue-600 text-center mb-6 md:mb-8">Nossa Equipe</h2>
        <p className="text-gray-700 text-center mb-6 md:mb-8 text-sm md:text-base">
          A <strong>Orn Eletróferragem</strong> é composta por engenheiros e técnicos experientes, prontos para auxiliar você em todas as etapas do seu projeto.
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {[
            { name: "Eng. Joaquim Santos", role: "Diretor Técnico", img: "/images/team-member1.jpg" },
            { name: "Ana Silva", role: "Consultora Comercial", img: "/images/team-member2.jpg" }
          ].map((member, index) => (
            <div key={index} className="bg-white shadow-lg p-4 md:p-6 rounded-lg text-center w-40 md:w-48">
              <img src={member.img} alt="Membro da equipe" className="rounded-full w-20 h-20 md:w-24 md:h-24 mx-auto mb-3" />
              <h3 className="text-md md:text-lg font-semibold text-blue-600">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção Produtos e Logística */}
      <section className="max-w-4xl mx-auto py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">Produtos de Qualidade</h2>
            <p className="text-gray-700 text-sm md:text-base">
              Oferecemos uma seleção de aços de alta resistência e durabilidade, provenientes das melhores marcas do mercado. Com a nossa linha de produtos, você pode ter a certeza de que está adquirindo qualidade e confiabilidade.
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">Logística Eficiente</h2>
            <p className="text-gray-700 text-sm md:text-base">
              Com uma logística eficiente, garantimos a entrega rápida e segura dos materiais em todo o país. Nossa estrutura logística é projetada para atender com agilidade, para que você nunca precise se preocupar com atrasos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

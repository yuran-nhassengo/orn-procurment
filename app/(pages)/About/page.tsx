import ContactSection from '@/Components/contact';
import React from 'react';

const About = () => {
  return (
    <div className="py-12 px-4 ">
      {/* Seção de Banner */}
      <section className="text-center py-12 text-black " style={{ backgroundImage: 'url("https://static-cse.canva.com/blob/759727/ComoTirareEditarSuaFotoparaPerfilemRedesSociaisfeaturedimagee1559023010630.jpg") '  }}>
        <h1 className="text-4xl font-bold mb-4">Sobre Nós</h1>
        <p className="text-lg">
          Conheça nossa história, visão e compromisso com a excelência em fornecimento de materiais elétricos.
        </p>
      </section>

      {/* Seção Visão e Missão */}
      <section className="max-w-4xl mx-auto py-12">
        <div className="text-center mb-12  border-2 ">
          <h2 className="text-2xl font-semibold text-blue-600">Nossa Visão e Missão</h2>
          <p className=" mt-2">
            Estamos aqui para fornecer as melhores soluções elétricas em Moçambique, com produtos de qualidade e atendimento de excelência.
          </p>
        </div>
        <div className="grid md:grid-cols-2  gap-8">
          <div className=" shadow-lg p-6 rounded-lg  border-2 ">
            <h3 className="text-xl font-semibold text-blue-600">Visão</h3>
            <p className=" mt-2">
              Ser a referência em fornecimento de materiais elétricos em Moçambique, reconhecida pela qualidade dos nossos produtos, pela eficiência dos nossos serviços e pela excelência no atendimento ao cliente.
            </p>
          </div>
          <div className=" shadow-lg p-6 rounded-lg  border-2 ">
            <h3 className="text-xl font-semibold text-blue-600">Missão</h3>
            <p className=" mt-2">
              Nossa missão é fornecer soluções elétricas inovadoras e de alta qualidade, garantindo a satisfação de nossos clientes através de produtos confiáveis e um atendimento excepcional.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Como Ajudamos da Melhor Maneira */}
      <section className="max-w-4xl mx-auto py-12">
     <h2 className="text-2xl font-semibold text-blue-600 text-center mb-8">Como Ajudamos da Melhor Maneira</h2>

      <div className="shadow-lg p-6 rounded-lg border-2">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEVtyfxGIY_Ef9NoMNxaK4kEYo28yjdpvWoQ&s" alt="Atendimento Personalizado" className="w-full h-48 object-cover mb-4 rounded-lg" />
         <h3 className="text-xl font-semibold text-blue-600">Atendimento Personalizado</h3>
           <p className=" mt-2">
          Priorizamos o atendimento personalizado, oferecendo soluções sob medida que atendem às suas necessidades específicas. Nossa equipe de especialistas trabalha de perto com você para garantir os melhores resultados em cada etapa do seu projeto.
         </p>
      </div>

      <div className="shadow-lg p-6 rounded-lg mt-8 border-2">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEVtyfxGIY_Ef9NoMNxaK4kEYo28yjdpvWoQ&s" alt="Produtos de Alta Qualidade" className="w-full h-48 object-cover mb-4 rounded-lg" />
       <h3 className="text-xl font-semibold text-blue-600">Produtos de Alta Qualidade</h3>
       <p className=" mt-2">
       Fornecemos apenas produtos de alta qualidade, com garantia de durabilidade e desempenho superior. Trabalhamos com as melhores marcas do mercado, oferecendo confiança e segurança para cada cliente.
       </p>
      </div>

  <div className="shadow-lg p-6 rounded-lg mt-8 border-2">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEVtyfxGIY_Ef9NoMNxaK4kEYo28yjdpvWoQ&s" alt="Soluções Inovadoras" className="w-full h-48 object-cover mb-4 rounded-lg" />
    <h3 className="text-xl font-semibold text-blue-600">Soluções Inovadoras</h3>
    <p className=" mt-2">
      Buscamos sempre soluções inovadoras e eficientes, adaptadas às necessidades do mercado. Nossos produtos e serviços são projetados para proporcionar o máximo de eficiência e segurança, ajudando nossos clientes a alcançar seus objetivos com sucesso.
    </p>
  </div>

  <div className="shadow-lg p-6 rounded-lg mt-8 border-2">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEVtyfxGIY_Ef9NoMNxaK4kEYo28yjdpvWoQ&s" alt="Serviços de Procurement" className="w-full h-48 object-cover mb-4 rounded-lg" />
    <h3 className="text-xl font-semibold text-blue-600">Serviços de Procurement</h3>
    <p className=" mt-2">
      Facilitamos a aquisição de materiais elétricos e afins, proporcionando suporte completo no processo de compra. Nossa equipe se encarrega de negociar e garantir os melhores produtos e preços, ajudando você a otimizar custos e obter produtos de alta qualidade para seus projetos.
    </p>
  </div>
</section>


      {/* Seção de Clientes <section className=" py-12">
        <div className="text-center mb-12  border-2 ">
          <h2 className="text-2xl font-semibold text-blue-600">Nossos Clientes</h2>
          <p className="text-lg ">Empresas que confiam em nós para fornecer soluções elétricas de alta qualidade.</p>
        </div>
        <div className="flex justify-center gap-8 flex-wrap  border-2 ">
          {/* Exemplo de Clientes *
          <div className="w-32 h-32  shadow-lg flex justify-center items-center rounded-lg">
            <img src="https://logosindustrias.co.mz/cdn/shop/files/LOGOS_PARCEIROS_-_LOGOS_INDUSTRIAS_2023-03_280x.png?v=1690505284" alt="Empresa 1" className="w-24 h-24 object-contain" />
          </div>
          <div className="w-32 h-32  shadow-lg flex justify-center items-center rounded-lg">
            <img src="https://logosindustrias.co.mz/cdn/shop/files/LOGOS_PARCEIROS_-_LOGOS_INDUSTRIAS_2023-17_280x.png?v=1690505295" alt="Empresa 2" className="w-24 h-24 object-contain" />
          </div>
          <div className="w-32 h-32  shadow-lg flex justify-center items-center rounded-lg">
            <img src="https://logosindustrias.co.mz/cdn/shop/files/LOGOS_PARCEIROS_-_LOGOS_INDUSTRIAS_2023-30_280x.png?v=1690505296" alt="Empresa 3" className="w-24 h-24 object-contain" />
          </div>
          <div className="w-32 h-32  shadow-lg flex justify-center items-center rounded-lg">
            <img src="https://logosindustrias.co.mz/cdn/shop/files/LOGOS_PARCEIROS_-_LOGOS_INDUSTRIAS_2023-28_280x.png?v=1690505296" alt="Empresa 4" className="w-24 h-24 object-contain" />
          </div>
          {/* Adicione mais logos de clientes conforme necessário *
        </div>
      </section>*/}
      

      {/* Seção de Valores */}
      <section className="dark:bg-gray-900 border-2  py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-blue-600">Nossos Valores</h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className=" shadow-lg p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-600">Qualidade</h3>
            <p className=" mt-2">Compromisso com a excelência em todos os produtos e serviços oferecidos.</p>
          </div>
          <div className=" shadow-lg p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-600">Inovação</h3>
            <p className=" mt-2">Busca constante por soluções inovadoras que atendam às necessidades do mercado.</p>
          </div>
          <div className=" shadow-lg p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-600">Integridade</h3>
            <p className=" mt-2">Transparência e ética em todas as nossas relações comerciais.</p>
          </div>
          <div className=" shadow-lg p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-600">Compromisso</h3>
            <p className=" mt-2">Foco no cliente e em suas necessidades, garantindo a melhor experiência possível.</p>
          </div>
        </div>
      </section>

      {/* Seção Equipe */}
      <section className="max-w-4xl mx-auto py-12 ">
        <h2 className="text-2xl font-semibold text-blue-600 text-center mb-8">Nossa Equipe</h2>
        <p className=" text-center mb-8">
          A <strong>Orn Eletróferragem</strong> é composta por engenheiros e técnicos experientes, prontos para auxiliar você em todas as etapas do seu projeto.
        </p>
        <div className="flex justify-center gap-8  ">
          <div className=" shadow-lg p-6 rounded-lg text-center">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEA8QDxAPEBAPDw8PEBAQEA8QDxAQFRUWFhcRFRUYHSggGB0lHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0dHR8rLS0tLS0tKy0rLS0tLSstKysrLSstLSstLS0tLS0tKysuLS0tKy0tLS0tLSstLS03Lf/AABEIAKsBJgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgAEBQMGB//EAD8QAAIBAgMFBQUFBgUFAAAAAAABAgMRBCExBRJBUWEGInGBkRMyobHBBzNSYtEUI0Jy8PEkU4KS4RVDc6Ky/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAHxEBAQEAAgMBAAMAAAAAAAAAAAECAxEhMUESIjJR/9oADAMBAAIRAxEAPwC0h0KhkfOe86HQqGRQyGQqGQQyCBBQBGAggQIAgEhCFEIRnjtv9uqdJulhIftFXRy/7UHyus5P08SydlvT2LZx/bKX+bTyuvfhqvM+Q7Qr47Gu+IrNR/y45U1/oWXm7mZX2Pu6S9YmpMev0WcnXcy+7QqKSvFqS5ppr4DHwXB4vE4V71CtOnne0JNRb0zi8n5o932b+0OM92ljkqcskq0V+7k+c1/D46eBbx/Z5Ym/lnT35BYSTSaaaaTTWaa5oY5tgQhAIAIGAABIUAASAKAYUAAYwoAAwsDABCECqyHQqHRgMhkKh0AyCgIZFBQUAYIKCAIBCAIEIQ54msqcJzekISm/BK4Hju1+16lWpLA0G4xUV+0VFrZ2apxfVa+Jn4DY0IRSSSXQXZUcp1Kj71STqTlrdybbz/rQu/8AVqMbbzaXgTXd8T07YkzO77dKmDglwMrG0VZ5cDYoY/DVco1U3yfdfxKm0KcVnfI567nx2zZfrx2Mp24GdKHM9BtGdNfxIwq1aGdn8D08Vtnp5eeZl9vZfZ52ilSqQwdWV6VS6oN6wnr7O/J8Op9MPgWGqNOM4Pv05RnF8pRd18Uj7tgsQqtKlVWlSnCovCST+peSfXLFdiBAc20AEgAAwgABGEAAAEAAYAgAAGFgKAAJAquh0KhkYDIZAQyAKGQEMgCFAQUVBCQhAxCEAJmdpZWwmI/NT3P9zUfqaZl9poXwlfpGMvSSf0KrxMIX3Y6QVnK3Hki1jMbh40++6cVok7Xb+ZxwlLfurtZWyditiNlQjCUIYeV5NuUlWa3nZrNvPRvK5nFn2u+pevEZuGxFF1Fu2zeTTyzNbtBRlGjv3yyK+zOz8oyjUqxjBQtuRXem7Zr+7L3aFp4e2d78dGNXM1OquJr83udPJbN2fLFTfetGPvP6A2jhqNF7kXCb495NgwjlC8VnCTu4NtKVuDtquhzx0ZzqOcoO75Zx8k8l4Hp8d+3ksvXfSUKKTUo5Z5rofYOyE74HC9Ke5/tbj9D49hVuu2fgz7F2Tp7uCw60vBy8pScl8GTk9JhrkIA5NoQhAAyEABABAAGAIAAAIAABhAUAgQAcEOhEMjCnQyEQ6AZDIRDoAhQAhBCAKAKCAIBPKbW2rXdXEUrblCFqbl3W5Xgm27rLW2p6o8d2hoKdapFrub0ZTlrm4RSbjq0rcDG71HbgkuvLhsWMd7M0dq4ylQi5ZN8F1POVcQ6c5bv4n6GRjMZKtiI07OSp2bWWcnZ38roZxdWul3Mxv4rbcoOmpYaVZzjvJp2inyXDIrdoe0cJ0IwdOUJatPgdamNg1uyxFKilZJJpyMXa1GlKKbrud/dbs/RnTOZfbGta+MaGPg8rNZ3vlkaeExilC+nNGG6WfdlGXzF9rKD5dODPRrimp4ebPNrN8tecN6Vz2XYLtDVqVng6kt+EKO9SlupOKjZbl1qrPjyPC0ar8mjX+zSbePhycK3o4tv5Ifj+KXfen14hCHBtCEIAABYAIAgAIAhAAAIAABhYCgEIQCuh0Ih0YUyGQqGQDIZCIZAMgoCCARhQhBCBEAJl7Z2fKonOlue1UWrTbjGXK7Sfy4moELLZ6fONqYKdCfs5venuQk5LSUmrtrpe/ocMHsunW9qpJpzSe9F2kmstfJHoe3sFFUKts7yhJ/l1Xxv6mNs6ssmieZfDtLNTy2dg4KhhaKjChGtWV7upUVOEu61e6Taf/JYxO3cV3FLDbLpuE6k4p1K0rKV9LQtdJ634GZiXKS7rafQ8ttLA4lttu50zv/U1jPX1Y2tjJVHKM6eD3rNJ0YSVo97W+vvXPMfs6SfHqWKmGnF975iS0O+fXt5d9d+ulnZGGniKsKULb1SW5G+i6votT6J2J7JPBN1q1nXlFwtGW9GEW7uzstUo/Hnlk/ZnsduU8VL3YXp0+s3bel5LLzfI+iHPe/kXOftQhCHNtAMIGACEABGAgAIAIAAQgAIxQsBRABABwQ6EQ6MKZDIVDIBkMhUEBkECCAQgQUEEIAgQICAea7apSjRg+PtG/JRX1PDqpKg7fw8HyPadqat60I/hp385N/ojAxuGUkZ/XV8vRnPeXHD7eh7su67a8CvtLbNNtWnfojK2jsqUc0m10zMOrTadmn8T0Y486+vPvl3n4v43H70nZ3RXjUbZXSHovM7zMk6ea6tvdfWfs1qXwlSP4K8l5OMX+p608J9mFbLEw/8AFNf+yfyR7s8u/wCz0T0hCAMqhCAAgGQjAACEKABhAwIKEAEAQBRCEIBwQyEQyMKdDJiIZAOmMmIggOMImG4DkQobgMEoYjalOElBPfm892Nslzb4FKttKUt5e6lll+puYtamLWtVxUI6vNcFr58jB27tqvCVKNBQipbznKS33layXBavPoCM8nwurGfXeefC6f1N3HWfHt1nFPqpWrTnNzqPelLV2S0VtF4Akx6sORXk9bnjtdZHT2yWTV0eZ29SgndaybsuSNrFVO6+Z5LHSlKTbuduDPd7cefXWeuleTRKazJYiPa+e0sHtWthZxq0J7s1lzjKPGMlxTPabO+0um91YjDzi3ZOVGSnG/PdlZr1Z881yHpUePoZuc323n9W+H2/Z22MPiEvY1YSbV9y6U14xeZePh1Ocobu63GW8pKSylFrinwPa7K7bTjuwrwVT88cp+LWjOWuLr09H5r3gCjs7a1HEXVOXeWbhJWlbnyfkXTlZ0yICAAgCAZRAEYGBAEYAIAIAqEAQo4oY5pjJmB0QUImMmQMhhUFFDIk6iiryaS5sDlZXZhVMQ6labfu0u7FcL8ZfQ3jH6bzn9NSrtFJ2irvrln4GBtTa8oxlKTu81CHC/NoavifZwc3rJ7sPF8TDr03Oq4y0VpeTTO0zJ6dpmRd2XvXdST71RLPqaOJekedmyvSSSUeB3re9C/4bs02es7R9CvPNby8/wBf66Haq7x8Wc6b3QK9OnZ2ej06dBcVhORYxEOMbtcuK/VFeWLys8+TR5uXh+5JXnsfOSus8jK/ZpzejsenhTU5Xkk/Q0nhoJZRXkc86ufHTO+Oavl4KrgpLhkVZws7HssZh1LLurp/Yz1s6N9N75eh6OPWr7jhvgnxj4TDXzenz6Iu0sPa7lw4fQ0vZKOqzS0EnDuPm2js3njmYpSpJJy5ZnPAq73nx08CxtJWpPq4r1Y9GKik+aVvEq9eXehWlGd4Ozjo+J6nZ3alxVq6cktWl319GeUw0bNX8Wd8VSvC65peRmyX2XPcfSMHjadaKnSkpJ+TXiuB3PmFDaM6VbdpytuxTv1f9j3Gw9tRxC3ZWjVirtcJL8UTjvj68uNz01xWS4LmGUIwXBcCMBGwXAhAXBcKJAXIUcEMhEMjAdDIRDIB0FCoFSooxcnok2IK2Or/AMK4a+JlpW3+dSS9DpUm3m9WrvzKlWp8j1ZnU6erM6jN2viN+vTor3aa3md5wtWT/FTj8P7mTgJb2IqyeedjXxD79J9F6PI0R2pZtXO2Ll30uUUg0l3orhkc09+pN/msiNO9V91epR327lvGVLR8DNoTu/FhO1iM34PgV61m81Z84uzfjzOsnmcMTlmBzVF8Jx8JK3yOsYT0vT5ZNv6Aoc35HeM730KRXeHtrJvwVvmJN2VopRvlfWT8yy2VZ5voiFVty48qat0HlkSehTpj7bdlGP5izRS3F5f2K+2I/dv8xaoLK3gy/GJ7rrThmi3QV7o5Ulkd8Osr9CNvNup+/rP86ivJI1MLiXCUJp2lGSkmul8vPTzMaj99Wb0jORbp1XJ3/hSdl48TTz5vh9Yo1VOMZLSUVJeDVx7mD2Rxe/RlBvOlLL+WWa+O8blzyanV6Yo3BcALkBBcALgG5BSXANyC3IUc0MhUMjAZDIVDIBkZ+2q1owjxnNLyWf6F9GBtyt/iKEPyyfmb453pvjn8i1Z6lXEz7reWQ055v0KU5d2ouUbnpehl7LVt6X4nJm1WzlSV7dxX9TCwT0X5rG/UXeg+UUviwT0tqW7Gc+OcY+YlKSpQu/eeYteorRXW5TxFVy8OVyDpWqOUJvLQqbPqXT+JaoxvCfgZOBlnJdSo1JTFxDvH1OTHlLugJTmreB3vZJcynRefqWL3BDt5M4RzR3krR6s5PKwacqz0QKbvcGIZMMEUtpwvB842kChU3lHyLdeN7roZ+Ddm1yZWL7aN8rcW0W5StG3O5Qg+8i1Wll4J/qRp5WrO9apHhvbz6tpF+DMqb/fz/m+hoQkbebF9vTdksVu4hRvlVg4eazXyfqe3ufLcFiHTqU5L+GUZejufUFJNJrRq68Dz8089ro1wXBcFzkyILguC4BBclwAEgCFCIZCoKOYdDIRDFDI8htyv/jKb6Sj8D1lR92Xgzwu2ZNYil4/Q7cM9124p9W69aKyldX4/qU5StN53U6cllzVn+p1xRTgu9b+b5HZ1rngo963U2qkrNdDHwf3nmaFZ5+gqZ9Bi692rcMjk5ZI4VH/9JfMNR5AaeAlvRqce76GJTe7VkjX2X7s/5WY9X71grRnUy8gUn3Sre78i1R91+YI4033mXYZlCnq/65l+lw8gsPJnCep3ev8AXQr1dfUKrV3qHCnOpx8jrRVvgGRrPveRn2tJ9S9iShX18ypVjBVLu/L+kWMRKyl4GfgXb1Rbxb7rBPTy8vvp+P0LlGpcoz+8qvx+RYwuqNPJx3ys1Z2lC2ufofTOz+I9phqT4xW4/wDTl8rHy5/eL+T9T33YmT9lUXBSi15r/g5cvp0vp6S4GQB5mUAQDAICAANyAIUf/9k=" alt="Membro da equipe" className="rounded-full w-24 h-24 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-blue-600">Eng. Joaquim Santos</h3>
            <p className="text-gray-500">Diretor Técnico</p>
          </div>
          <div className=" shadow-lg p-6 rounded-lg text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyaW9HqNirhL9tEGfEdvqQyz19CS3HAQ15sT4tbwbelMcYmViILJrJ468iUJXTHvhF4qA&usqp=CAU" alt="Membro da equipe" className="rounded-full w-24 h-24 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-blue-600">Ana Silva</h3>
            <p className="text-gray-500">Consultora Comercial</p>
          </div>
          {/* Adicione mais membros conforme necessário */}
        </div>
      </section>

      {/* Seção Produtos e Logística */}
      <section className="max-w-4xl mx-auto py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className=' shadow-lg p-6 rounded-lg'>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Produtos de Qualidade</h2>
            <p className="">
              Oferecemos uma seleção de aços de alta resistência e durabilidade, provenientes das melhores marcas do mercado. Com a nossa linha de produtos, você pode ter a certeza de que está adquirindo qualidade e confiabilidade.
            </p>
          </div>
          <div className=' shadow-lg p-6 rounded-lg'>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Logística Eficiente</h2>
            <p className="">
              Com uma logística eficiente, garantimos a entrega rápida e segura dos materiais em todo o país. Nossa estrutura logística é projetada para atender com agilidade, para que você nunca precise se preocupar com atrasos.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto py-12">
       <ContactSection/>
      </section>
      
    </div>
  );
};

export default About;

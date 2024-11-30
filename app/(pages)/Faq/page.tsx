"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";





interface FaqProps {
  page: string;
}

interface FaqItem {
  question: string;
  answer: string;
}


const Faq = ({ page }: FaqProps) => {

  type FaqData = {
    [key in "home" | "inbox" | "calendar" | "search" | "settings" |"procurement"]: FaqItem[];
  };

 

  const faqData = {
    home: [
      { question: "O que é o nosso site?", answer: "Somos uma loja especializada em materiais elétricos, com foco em qualidade e inovação. Oferecemos também serviços de projetos e consultoria para instalação elétrica." },
      { question: "Como posso comprar materiais elétricos?", answer: "Basta navegar pelas categorias do site, selecionar os produtos desejados e adicionar ao carrinho. Depois, finalize a compra com o pagamento." },
    ],
    inbox: [
      { question: "Como posso acompanhar meu pedido?", answer: "Após realizar o pedido, você pode acompanhar o status no seu perfil, na seção 'Meus Pedidos'. Receberá também notificações por e-mail sobre o andamento da entrega." },
      { question: "Como posso alterar ou cancelar um pedido?", answer: "Entre em contato com o nosso suporte imediatamente para solicitar alterações ou cancelamentos. Lembre-se de que a alteração só é possível enquanto o pedido não for processado." },
    ],
    calendar: [
      { question: "Como agendar um projeto de instalação elétrica?", answer: "Você pode agendar um projeto de instalação elétrica diretamente em nosso site, na seção de 'Projetos'. Se preferir, entre em contato com nossa equipe para um orçamento personalizado." },
      { question: "Quais tipos de projetos elétricos vocês realizam?", answer: "Realizamos projetos elétricos para residências, comércios e indústrias, incluindo a instalação de sistemas fotovoltaicos e automação." },
    ],
    search: [
      { question: "Como posso encontrar um produto específico?", answer: "Utilize a barra de pesquisa no topo do site e digite o nome ou código do produto. Também pode filtrar os resultados por categorias como fios, cabos, lâmpadas, entre outros." },
      { question: "Quais marcas de produtos elétricos vocês oferecem?", answer: "Oferecemos uma ampla variedade de marcas renomadas no mercado, como Siemens, Schneider, Philips, e muitas outras." },
    ],
    settings: [
      { question: "Como faço para criar uma conta no site?", answer: "Clique no ícone de login no canto superior direito e selecione 'Criar Conta'. Preencha seus dados e você estará pronto para realizar compras e acompanhar seus pedidos." },
      { question: "Quais formas de pagamento são aceitas?", answer: "Aceitamos cartões de crédito, boleto bancário e transferência bancária. Para projetos personalizados, também oferecemos condições de pagamento diferenciadas." },
    ],
    procurement: [
      { question: "O que é o serviço de Procurement que vocês oferecem?", answer: "Nosso serviço de Procurement é voltado para empresas que precisam de fornecimento de materiais elétricos em grande escala. Ajudamos com a aquisição de produtos de acordo com as necessidades específicas do seu projeto." },
      { question: "Como solicitar um orçamento de compra em grande escala?", answer: "Para solicitações de grandes compras, basta acessar nossa seção de 'Procurement' e preencher o formulário de orçamento. Nossa equipe entrará em contato para personalizar a proposta de acordo com sua demanda." },
      { question: "Vocês realizam compras internacionais?", answer: "Sim! Podemos atender clientes internacionais e fornecer materiais elétricos de alta qualidade, com frete internacional incluso, conforme as especificações do seu projeto." },
    ],
  };

  const selectedFaq = faqData[page as keyof FaqData] || [];

 

  return (
    <div>
        <h1>Perguntas Frequentes -{page}</h1>
        <Accordion type="single" collapsible>

          { selectedFaq.map((item,index) =>(

            <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>
                {item.answer}
            </AccordionContent>
        </AccordionItem>
          ))

          }
        
        </Accordion>

      
    </div>
  )
}

export default Faq;





"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../components/ui/accordion";

// Define as props do componente, mas não deve ser exportado diretamente, já que é utilizado para tipagem
interface FaqProps {
  page: "home" | "inbox" | "calendar" | "search" | "settings" | "procurement";
}

interface FaqItem {
  question: string;
  answer: string;
}

// Componente Faq
const Faq = ({ page }: FaqProps) => {
  // Definindo o tipo de faqData
  type FaqData = {
    [key in "home" | "inbox" | "calendar" | "search" | "settings" | "procurement"]: FaqItem[];
  };

  // Dados de FAQ por página
  const faqData: FaqData = {
    home: [
      { question: "O que é o nosso site?", answer: "Somos uma loja especializada em materiais elétricos, com foco em qualidade e inovação..." },
      { question: "Como posso comprar materiais elétricos?", answer: "Basta navegar pelas categorias do site, selecionar os produtos desejados..." },
    ],
    inbox: [
      { question: "Como posso acompanhar meu pedido?", answer: "Após realizar o pedido, você pode acompanhar o status no seu perfil..." },
      { question: "Como posso alterar ou cancelar um pedido?", answer: "Entre em contato com o nosso suporte para alterações..." },
    ],
    calendar: [
      { question: "Como agendar um projeto de instalação elétrica?", answer: "Você pode agendar um projeto diretamente em nosso site..." },
      { question: "Quais tipos de projetos elétricos vocês realizam?", answer: "Realizamos projetos para residências, comércios e indústrias..." },
    ],
    search: [
      { question: "Como posso encontrar um produto específico?", answer: "Use a barra de pesquisa no topo do site..." },
      { question: "Quais marcas de produtos elétricos vocês oferecem?", answer: "Oferecemos marcas renomadas como Siemens, Schneider, Philips..." },
    ],
    settings: [
      { question: "Como faço para criar uma conta no site?", answer: "Clique no ícone de login e selecione 'Criar Conta'..." },
      { question: "Quais formas de pagamento são aceitas?", answer: "Aceitamos cartões de crédito, boleto bancário e transferência..." },
    ],
    procurement: [
      { question: "O que é o serviço de Procurement que vocês oferecem?", answer: "Ajudamos com a aquisição de materiais elétricos em grande escala..." },
      { question: "Como solicitar um orçamento de compra em grande escala?", answer: "Acesse a seção 'Procurement' e preencha o formulário de orçamento..." },
      { question: "Vocês realizam compras internacionais?", answer: "Sim! Atendemos clientes internacionais com frete incluso..." },
    ],
  };

  // Selecionando os FAQs de acordo com a página
  const selectedFaq = faqData[page];

  return (
    <div>
      <h1>Perguntas Frequentes - {page}</h1>
      <Accordion type="single" collapsible>
        {selectedFaq.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

// Exporte o componente Faq corretamente
export default Faq;

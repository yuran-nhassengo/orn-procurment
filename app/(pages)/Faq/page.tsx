import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../components/ui/accordion";
import { FaqItem, FaqProps } from "@/app/types/produto";



// Componente Faq
const Faq: React.FC<FaqProps> = ({ page }) => {
  type FaqData = {
    [key in "home" | "inbox" | "calendar" | "search" | "settings" | "procurement"]: FaqItem[];
  };

  const faqData: FaqData = {
    home: [
      { question: "O que é o nosso site?", answer: "Somos uma loja especializada..." },
      { question: "Como posso comprar materiais elétricos?", answer: "Basta navegar..." },
    ],
    inbox: [
      { question: "Como posso acompanhar meu pedido?", answer: "Após realizar o pedido..." },
      { question: "Como posso alterar ou cancelar um pedido?", answer: "Entre em contato com..." },
    ],
    calendar: [
      { question: "Como agendar um projeto de instalação elétrica?", answer: "Você pode agendar..." },
      { question: "Quais tipos de projetos elétricos vocês realizam?", answer: "Realizamos projetos..." },
    ],
    search: [
      { question: "Como posso encontrar um produto específico?", answer: "Use a barra de pesquisa..." },
      { question: "Quais marcas de produtos elétricos vocês oferecem?", answer: "Oferecemos marcas..." },
    ],
    settings: [
      { question: "Como faço para criar uma conta?", answer: "Clique no ícone..." },
      { question: "Quais formas de pagamento são aceitas?", answer: "Aceitamos cartões..." },
    ],
    procurement: [
      { question: "O que é o serviço de Procurement?", answer: "Ajudamos com a aquisição..." },
      { question: "Como solicitar um orçamento de compra?", answer: "Acesse a seção..." },
      { question: "Vocês realizam compras internacionais?", answer: "Sim, atendemos..." },
    ],
  };

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

export default Faq;

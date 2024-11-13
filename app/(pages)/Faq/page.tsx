"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/Components/ui/accordion'

interface FaqProps {
  page: string;
}

interface FaqItem {
  question: string;
  answer: string;
}


const Faq = ({ page }: FaqProps) => {

  type FaqData = {
    [key in "home" | "inbox" | "calendar" | "search" | "settings"]: FaqItem[];
  };

  const faqData = {
    home: [
      { question: "What is Home?", answer: "This is the home page content." },
      { question: "How to use Home?", answer: "You can navigate through different sections." },
    ],
    inbox: [
      { question: "What is Inbox?", answer: "Your inbox contains messages." },
      { question: "How to read messages?", answer: "Click on any message to open it." },
    ],
    calendar: [
      { question: "What is Calendar?", answer: "You can view your schedule here." },
      { question: "How to add events?", answer: "Click the 'Add' button and fill the event details." },
    ],
    search: [
      { question: "What is Search?", answer: "You can search for items here." },
      { question: "How to refine search?", answer: "Use filters to narrow down your search." },
    ],
    settings: [
      { question: "What is Settings?", answer: "Here you can change app settings." },
      { question: "How to update profile?", answer: "Go to the 'Profile' section and edit your details." },
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





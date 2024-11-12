"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/Components/ui/accordion'


const Faq = () => {
  return (
    <div>

        <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
        </AccordionItem>
        </Accordion>

      
    </div>
  )
}

export default Faq;





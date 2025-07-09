
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are my data and screenshots safe?",
    answer: "Absolutely. Security is our top priority. All data is encrypted and stored with the highest security standards. We never share your data."
  },
  {
    question: "What devices will Lemonote run on?",
    answer: "We are launching with apps for iOS and Android. We are also planning a desktop version and a browser extension in the future."
  },
  {
    question: "How are you different from Notion or Readwise?",
    answer: "The main difference is automation and passivity. Tools like Notion require you to be active - copying and organising. Lemonote does all this for you, in the background, with no effort on your part."
  },
  {
    question: "Will there be a charge for the app?",
    answer: "We are planning a free plan with basic features and a premium plan for the most demanding users. Those on the waiting list will receive a special offer to get started!"
  }
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/70 backdrop-blur-sm border border-purple-100 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 leading-relaxed pt-2">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

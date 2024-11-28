"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the escrow service work?",
    answer: "Our escrow service acts as a trusted third party that holds the payment until both buyer and seller fulfill their obligations. The buyer deposits funds, the seller delivers the item, and once the buyer confirms receipt, we release the payment to the seller.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept payments through EasyPaisa, JazzCash, and direct bank transfers. All payment methods are secure and verified.",
  },
  {
    question: "How long does the process take?",
    answer: "The escrow process typically takes 1-3 business days, depending on the payment method and delivery time. Once delivery is confirmed, payments are released within 24 hours.",
  },
  {
    question: "Is my money safe?",
    answer: "Yes, your money is completely safe. We use bank-level security measures and keep funds in secure escrow accounts until the transaction is complete.",
  },
  {
    question: "What if I don't receive my item?",
    answer: "If you don't receive your item or it's not as described, you can raise a dispute. Our support team will investigate and help resolve the issue. If necessary, we'll refund your payment.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[900px] text-muted-foreground">
            Find answers to common questions about our escrow service
          </p>
        </div>
        <div className="mx-auto max-w-3xl mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
"use client";

import Hero from "./hero";
import Features from "./features";
import HowItWorks from "./how-it-works";
import PaymentMethods from "./payment-methods";
import Testimonials from "./testimonials";
import FAQ from "./faq";

interface HomeProps {
  lang: string;
}

export default function Home({ lang }: HomeProps) {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Features />
      <HowItWorks />
      <PaymentMethods />
      <Testimonials />
      <FAQ />
    </main>
  );
}
"use client";

import { ArrowRight, Shield, UserCheck, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import HowItWorks from "@/components/home/how-it-works";
import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import PaymentMethods from "@/components/home/payment-methods";
import Testimonials from "@/components/home/testimonials";
import FAQ from "@/components/home/faq";

export default function Home() {
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
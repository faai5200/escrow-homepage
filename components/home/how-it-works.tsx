"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Package, CreditCard, CheckCircle } from "lucide-react";

const steps = [
  {
    title: "1. Create Deal",
    description: "Buyer and seller agree on terms and create an escrow deal",
    icon: Package,
  },
  {
    title: "2. Secure Payment",
    description: "Buyer deposits funds using their preferred payment method",
    icon: CreditCard,
  },
  {
    title: "3. Delivery & Confirmation",
    description: "Seller ships item, buyer confirms receipt",
    icon: CheckCircle,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
          <p className="max-w-[900px] text-muted-foreground">
            Our escrow service makes online trading safe and simple. Follow these three easy steps to complete your transaction.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
          {steps.map((step) => (
            <Card key={step.title} className="relative overflow-hidden">
              <CardContent className="p-6">
                <step.icon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button size="lg">
            Start Your First Deal <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
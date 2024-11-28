"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const paymentMethods = [
  {
    name: "EasyPaisa",
    description: "Pakistan's largest mobile payment platform",
    logo: "https://images.unsplash.com/photo-1612810806563-4cb8265db55f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    name: "JazzCash",
    description: "Secure mobile payments and transfers",
    logo: "https://images.unsplash.com/photo-1612810806695-30442bdb5d7b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    name: "Bank Transfer",
    description: "Direct bank-to-bank transfers",
    logo: "https://images.unsplash.com/photo-1612810806563-4cb8265db55f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

export default function PaymentMethods() {
  return (
    <section className="bg-secondary py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Supported Payment Methods</h2>
          <p className="max-w-[900px] text-muted-foreground">
            Choose from multiple secure payment options that work best for you
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
          {paymentMethods.map((method) => (
            <Card key={method.name} className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="aspect-square relative mb-4">
                  <Image
                    src={method.logo}
                    alt={method.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-xl mb-2">{method.name}</h3>
                <p className="text-muted-foreground">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { Shield, Lock, Clock, Wallet, UserCheck, Phone } from "lucide-react";

const features = [
  {
    name: "Secure Payments",
    description: "Your money stays safe in escrow until you confirm delivery",
    icon: Shield,
  },
  {
    name: "Multiple Payment Methods",
    description: "EasyPaisa, JazzCash, and direct bank transfers supported",
    icon: Wallet,
  },
  {
    name: "Verified Users",
    description: "All users go through strict verification process",
    icon: UserCheck,
  },
  {
    name: "24/7 Support",
    description: "Our team is always available to help via WhatsApp",
    icon: Phone,
  },
  {
    name: "Fast Processing",
    description: "Quick release of payments once delivery is confirmed",
    icon: Clock,
  },
  {
    name: "Bank-Level Security",
    description: "Your data and transactions are fully encrypted",
    icon: Lock,
  },
];

export default function Features() {
  return (
    <div className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Secure Trading</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need for safe online trading
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our escrow service ensures both buyers and sellers are protected throughout the transaction process.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <feature.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
"use client";

import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Pakistan&apos;s Most Trusted Escrow Service
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Say goodbye to risky deals and DVA uncertainties. Our secure escrow service protects both buyers and sellers with guaranteed payments and verified deliveries.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">
              Start Secure Trading <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More <Shield className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
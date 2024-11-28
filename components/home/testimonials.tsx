"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Buyer",
    content: "The escrow service gave me confidence to make high-value purchases online. Excellent support team!",
    rating: 5,
  },
  {
    name: "Sara Ali",
    role: "Seller",
    content: "As a seller, I feel secure knowing the payment is guaranteed once I deliver the product.",
    rating: 5,
  },
  {
    name: "Muhammad Usman",
    role: "Regular Trader",
    content: "Much better than traditional DVA deals. The process is smooth and professional.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
          <p className="max-w-[900px] text-muted-foreground">
            Join thousands of satisfied users who trust our escrow service for their online trades
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
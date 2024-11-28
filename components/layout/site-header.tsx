"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-6 w-6" />
              <span className="font-bold">TrustTrade</span>
            </Link>
            <nav className="hidden md:ml-8 md:flex md:space-x-8">
              <Link href="/how-it-works" className="text-sm font-medium">
                How It Works
              </Link>
              <Link href="/features" className="text-sm font-medium">
                Features
              </Link>
              <Link href="/pricing" className="text-sm font-medium">
                Pricing
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
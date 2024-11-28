"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const languages = {
  en: "English",
  ur: "اردو",
};

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState("en");

  useEffect(() => {
    const locale = pathname.split('/')[1];
    if (locale in languages) {
      setCurrentLocale(locale);
    }
  }, [pathname]);

  const switchLanguage = (locale: string) => {
    const newPathname = pathname.replace(/^\/[^\/]+/, `/${locale}`);
    Cookies.set('NEXT_LOCALE', locale);
    router.push(newPathname);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-4 w-4" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([code, name]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => switchLanguage(code)}
            className={currentLocale === code ? "bg-accent" : ""}
          >
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
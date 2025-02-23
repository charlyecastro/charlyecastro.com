"use client";

import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Instagram, Github, Mail, Linkedin } from "lucide-react";

export default function Nav() {
  return (
    <div className="sticky top-0">
      <nav className="flex flex-row justify-between items-center py-2 bg-white">
        <a
          href="/#home"
          className="text-lg font-semibold hover:text-muted-foreground"
        >
          CHARLYE CASTRO
        </a>
        <ul className="hidden md:flex flex-row gap-4">
          <li>
            <a href="/about" className="leading-7 hover:text-muted-foreground">
              About
            </a>
          </li>
          <li>
            <a href="/#work" className="leading-7 hover:text-muted-foreground">
              Work
            </a>
          </li>
          <li>
            <a href="#" className="leading-7 hover:text-muted-foreground">
              Resume
            </a>
          </li>
        </ul>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTrigger asChild>
                  <a href="#" className="text-lg font-semibold">
                    CHARLYE CASTRO
                  </a>
                </SheetTrigger>
              </SheetHeader>
              <ul className="flex flex-col gap-8 text-center justify-center items-center h-full">
                <SheetTrigger asChild>
                  <li>
                    <a
                      href="/#"
                      className="text-lg hover:text-muted-foreground"
                    >
                      Home
                    </a>
                  </li>
                </SheetTrigger>
                <SheetTrigger asChild>
                  <li>
                    <a
                      href="/about"
                      className="text-lg hover:text-muted-foreground"
                    >
                      About
                    </a>
                  </li>
                </SheetTrigger>
                <SheetTrigger asChild>
                  <li>
                    <a
                      href="/#work"
                      className="text-lg hover:text-muted-foreground"
                    >
                      Work
                    </a>
                  </li>
                </SheetTrigger>
                <SheetTrigger asChild>
                  <li>
                    <a
                      href="/"
                      className="text-lg hover:text-muted-foreground"
                    >
                      Resume
                    </a>
                  </li>
                </SheetTrigger>
              </ul>
              <SheetFooter>
                <div class="flex gap-2 w-full justify-center">
                  <a href="" class="text-muted-foreground">
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://github.com/charlyecastro"
                    class="text-muted-foreground"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/charlyecastro/"
                    class="text-muted-foreground"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:charlyecastro@gmail.com"
                    class="text-muted-foreground"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}

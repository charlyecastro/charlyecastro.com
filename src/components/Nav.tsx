"use client";

import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import Socials from "@/components/Socials";
import { Menu } from "lucide-react";

export default function Nav() {
  return (
    <div id="nav" className="sticky top-0">
      <nav className="flex flex-row justify-between items-center py-2 bg-white">
        <a
          href="/#home"
          className="text-lg font-semibold hover:text-muted-foreground"
        >
          CHARLYE CASTRO
        </a>
        <ul className="hidden md:flex flex-row gap-4 items-center">
          <li>
            <a href="/#work" className="leading-7 hover:text-muted-foreground">
              Work
            </a>
          </li>
          <li>
            <a href="/about" className="leading-7 hover:text-muted-foreground">
              About
            </a>
          </li>
          <li>
            <a
              href="/resume"
              className="hidden sm:block leading-7 hover:text-muted-foreground"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="/charlye-castro-resume.pdf"
              target="_blank"
              className={buttonVariants({ variant: "outline" })}
            >
              Download
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
                      href="/charlye-castro-resume.pdf"
                      target="_blank"
                      className={buttonVariants({ variant: "outline" })}
                    >
                      Get Resume
                    </a>
                  </li>
                </SheetTrigger>
              </ul>
              <SheetFooter>
                <Socials
                  className="w-full justify-center"
                  iconSize={20}
                  iconClass="text-muted-foreground"
                />
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}

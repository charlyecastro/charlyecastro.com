import * as React from "react";
import { Instagram, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  iconClass?: string;
  iconSize?: number;
}

export default function Socials({ className, iconClass, iconSize }: Props) {
  return (
    <div class={cn("flex gap-2", className)}>
      <a
        aria-label="Instagram"
        href="https://github.com/charlyecastro"
        class={iconClass}
      >
        <Instagram size={iconSize} />
      </a>
      <a
        aria-label="Github"
        href="https://github.com/charlyecastro"
        class={iconClass}
      >
        <Github size={iconSize} />
      </a>
      <a
        aria-label="LinkdedIn"
        href="https://www.linkedin.com/in/charlyecastro/"
        class={iconClass}
      >
        <Linkedin size={iconSize} />
      </a>
      <a
        aria-label="Email"
        href="mailto:charlyecastro@gmail.com"
        class={iconClass}
      >
        <Mail size={iconSize} />
      </a>
    </div>
  );
}

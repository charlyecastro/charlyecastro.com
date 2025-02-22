import { Badge } from "@/components/ui/badge";
import { ExperienceProps } from "./Experience.types.ts";

export default function Experience({
  title,
  date,
  url,
  logo,
  tools,
}: ExperienceProps) {
  return (
    <div className="flex gap-2">
      <div className="h-full flex flex-col justify-start">
        <a href={url}>
          <img
            src={logo}
            width="45"
            height="45"
            decoding="async"
            loading="lazy"
            alt="A description of my image."
          />
        </a>
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <h4 className="text-xl font-medium tracking-tight">{title}</h4>
          <p className="text-sm font-medium leading-none text-muted-foreground">
            {date}
          </p>
        </div>
        <div className="flex gap-2">
          {tools.map((tool, i) => {
            return <Badge key={i} variant="secondary">{tool}</Badge>;
          })}
        </div>
      </div>
    </div>
  );
}

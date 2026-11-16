import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_PRIMARY, PHONE_TEL } from "@/lib/menu";

const links = [
  { href: "#sizes", label: "Pizzas" },
  { href: "#deals", label: "Deals" },
  { href: "#how", label: "Delivery" },
  { href: "#book", label: "Book ahead" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-card/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a href="#top" className="flex items-baseline gap-1">
          <span className="font-display text-3xl font-extrabold text-primary">Buddies</span>
          <span className="font-hand text-2xl text-ink">pizza</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-ink underline-offset-4 hover:text-primary hover:underline"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden items-center gap-2 text-sm font-semibold text-ink lg:flex"
          >
            <Phone className="size-4 text-primary" /> {PHONE_PRIMARY}
          </a>
          <Button variant="sauce" size="sm" asChild>
            <a href="#deals">Order now</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

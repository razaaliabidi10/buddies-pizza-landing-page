import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_PRIMARY, PHONE_TEL } from "@/lib/menu";

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden border-t-2 border-ink bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-14 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-hand text-3xl text-cheese">hungry already?</p>
          <a href={`tel:${PHONE_TEL}`} className="mt-2 flex items-center gap-3 font-display text-4xl font-extrabold md:text-5xl">
            <Phone className="size-8 text-cheese" /> {PHONE_PRIMARY}
          </a>
          <p className="mt-3 text-primary-foreground/80">Delivery & takeaway only · No dine-in</p>
        </div>
        <Button variant="cheese" size="xl" asChild>
          <a href="#deals">Order now</a>
        </Button>
      </div>
      <p
        aria-hidden
        className="select-none px-4 text-center font-display text-[22vw] font-extrabold leading-[0.75] text-primary-deep"
      >
        Buddies
      </p>
      <p className="relative pb-6 text-center text-xs text-primary-foreground/70">
        © {new Date().getFullYear()} Buddies Pizza. Made hot, delivered hotter.
      </p>
    </footer>
  );
}

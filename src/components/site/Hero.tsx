import { Bike, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-friends-pizza.jpg";
import pepperoni from "@/assets/pizza-pepperoni.png";

export function Hero() {
  return (
    <section id="top" className="tiles relative overflow-hidden px-3 pb-14 pt-6 md:px-6 md:pt-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border-2 border-ink shadow-sticker-lg">
          <img
            src={hero}
            alt="Friends pulling cheesy pepperoni slices from a Buddies delivery box at home"
            width={1600}
            height={1072}
            className="h-[640px] w-full object-cover md:h-[720px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/45 to-transparent" />
          <div className="grain absolute inset-0" />

          <div className="absolute inset-0 flex flex-col justify-end p-6 md:justify-center md:p-14">
            <span className="mb-5 inline-flex w-fit -rotate-2 items-center gap-2 rounded-full border-2 border-ink bg-cheese px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-ink">
              Delivery & takeaway only
            </span>
            <h1 className="max-w-2xl font-display text-6xl font-extrabold leading-[0.88] text-primary-foreground md:text-8xl">
              Hot. Cheesy.
              <br />
              At your door.
            </h1>
            <p className="mt-5 max-w-md text-lg text-primary-foreground/90">
              No tables, no waiting. Just fresh, loaded pizza from our oven to your couch —
              or grab it hot from the counter.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="cheese" size="xl" asChild>
                <a href="#deals">
                  <Bike /> Order delivery
                </a>
              </Button>
              <Button variant="paper" size="xl" asChild>
                <a href="#book">
                  <ShoppingBag /> Book a pickup
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Rotating sticker */}
        <div className="absolute -right-2 -top-2 hidden size-40 md:block lg:-right-6 lg:-top-6">
          <svg viewBox="0 0 200 200" className="size-full animate-spin-slow">
            <defs>
              <path id="circ" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
            </defs>
            <circle cx="100" cy="100" r="96" className="fill-cheese stroke-ink" strokeWidth="4" />
            <text className="fill-ink font-display text-[19px] font-extrabold uppercase tracking-[0.2em]">
              <textPath href="#circ">Fresh out the oven • Fresh out the oven •</textPath>
            </text>
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-hand text-3xl text-primary">
            Rs. 300+
          </span>
        </div>

        {/* Floating pizza */}
        <img
          src={pepperoni}
          alt=""
          aria-hidden
          width={1024}
          height={1024}
          className="pointer-events-none absolute -bottom-16 -right-10 hidden w-72 animate-float drop-pizza lg:block"
        />
      </div>
    </section>
  );
}

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deals, familyDeal, formatPKR, PHONE_TEL } from "@/lib/menu";
import handsBoxes from "@/assets/deal-hands-boxes.jpg";
import stuffed from "@/assets/pizza-stuffed.png";

export function Deals() {
  const deal3 = deals.find((d) => d.id === "deal-3")!;
  return (
    <section id="deals" className="px-3 pb-16 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-hand text-3xl text-primary">share the love</p>
            <h2 className="font-display text-5xl font-extrabold leading-[0.9] md:text-7xl">
              Buddy deals
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Combos built for movie nights, hostel rooms and family dinners. All prices in
            Pakistani Rupees.
          </p>
        </div>

        {/* Featured pair, like photo cards */}
        <div className="grid gap-5 md:grid-cols-2">
          <article className="overflow-hidden rounded-3xl border-2 border-ink bg-primary shadow-sticker-lg">
            <img
              src={handsBoxes}
              alt="Hands grabbing slices from two large pizzas"
              loading="lazy"
              width={1200}
              height={912}
              className="h-72 w-full border-b-2 border-ink object-cover md:h-96"
            />
            <div className="grain flex items-end justify-between gap-4 p-6 text-primary-foreground">
              <div>
                <h3 className="font-display text-4xl font-extrabold">Double Large</h3>
                <p className="text-primary-foreground/85">{deal3.items.join(" · ")}</p>
                <p className="mt-1 font-display text-2xl font-extrabold text-cheese">
                  {formatPKR(deal3.price!)}
                </p>
              </div>
              <Button variant="cheese">Order now</Button>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-3xl border-2 border-ink bg-ink text-cream shadow-sticker-lg">
            <div className="gingham h-72 border-b-2 border-ink md:h-96">
              <img
                src={stuffed}
                alt="Stuffed crust pizza"
                loading="lazy"
                width={1024}
                height={1024}
                className="mx-auto h-full w-auto -rotate-12 p-6 drop-pizza"
              />
            </div>
            <span className="absolute left-5 top-5 -rotate-6 rounded-full border-2 border-ink bg-cheese px-4 py-1 font-display text-sm font-extrabold uppercase text-ink">
              Biggest box
            </span>
            <div className="grain flex items-end justify-between gap-4 p-6">
              <div>
                <h3 className="font-display text-4xl font-extrabold text-cheese">
                  {familyDeal.name}
                </h3>
                <p className="text-cream/80">{familyDeal.items.join(" · ")}</p>
                <p className="mt-1 font-hand text-2xl text-cheese">Call for today’s price</p>
              </div>
              <Button variant="sauce" asChild>
                <a href={`tel:${PHONE_TEL}`}>Call</a>
              </Button>
            </div>
          </article>
        </div>

        {/* Deal tickets */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {deals
            .filter((d) => d.id !== "deal-3")
            .map((d, i) => (
              <article
                key={d.id}
                className={`group relative flex flex-col rounded-2xl border-2 border-ink bg-card p-5 shadow-sticker transition-transform hover:-translate-y-1 ${
                  i % 3 === 1 ? "md:rotate-1" : i % 3 === 2 ? "md:-rotate-1" : ""
                }`}
              >
                <div className="flex items-center justify-between border-b-2 border-dashed border-ink/40 pb-3">
                  <span className="font-display text-2xl font-extrabold text-primary">{d.name}</span>
                  <span className="rounded-full bg-cheese px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink">
                    Combo
                  </span>
                </div>
                <ul className="my-4 flex-1 space-y-1.5">
                  {d.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 font-medium">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-extrabold">{formatPKR(d.price!)}</span>
                  <Button variant="cheese" size="icon" aria-label={`Order ${d.name}`}>
                    <Plus />
                  </Button>
                </div>
              </article>
            ))}
          <a
            href={`tel:${PHONE_TEL}`}
            className="grain flex flex-col justify-between rounded-2xl border-2 border-ink bg-cheese p-6 shadow-sticker transition-transform hover:-translate-y-1 sm:col-span-2"
          >
            <p className="font-hand text-3xl text-primary">feeding a crowd?</p>
            <p className="font-display text-4xl font-extrabold leading-none">
              More deals on call — just ask your buddy.
            </p>
            <span className="mt-4 font-display text-lg font-extrabold uppercase">Call now →</span>
          </a>
        </div>
      </div>
    </section>
  );
}

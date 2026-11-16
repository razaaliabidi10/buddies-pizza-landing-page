import { formatPKR, sizes, stuffedCrust } from "@/lib/menu";
import tikka from "@/assets/pizza-tikka.png";
import veggie from "@/assets/pizza-veggie.png";
import pepperoni from "@/assets/pizza-pepperoni.png";
import stuffed from "@/assets/pizza-stuffed.png";

const imgs = [veggie, tikka, pepperoni];

export function Sizes() {
  const cards = [
    ...sizes.map((s, i) => ({ ...s, img: imgs[i], tag: null as string | null })),
    {
      id: stuffedCrust.id,
      name: "Stuffed Crust",
      price: stuffedCrust.price,
      note: "12 inch, cheese baked right into the edge.",
      img: stuffed,
      tag: "12 inch",
    },
  ];

  return (
    <section id="sizes" className="px-3 py-16 md:px-6">
      <div className="grain mx-auto max-w-7xl overflow-hidden rounded-3xl border-2 border-ink bg-primary px-6 pb-12 pt-12 text-primary-foreground md:px-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-xl font-display text-5xl font-extrabold leading-[0.9] md:text-7xl">
            There’s a pizza for every buddy
          </h2>
          <p className="max-w-sm text-primary-foreground/85">
            Pick a size, we load it up. Every pizza is made to order and boxed hot for
            delivery or pickup.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-5 gap-y-20 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <article
              key={c.id}
              className="relative rounded-2xl border-2 border-ink bg-primary-deep px-5 pb-6 pt-28 text-center shadow-sticker transition-transform hover:-translate-y-1"
            >
              <img
                src={c.img}
                alt={`${c.name} pizza`}
                loading="lazy"
                width={1024}
                height={1024}
                style={{ ["--r" as string]: `${i * 40}deg` }}
                className="absolute -top-16 left-1/2 w-40 -translate-x-1/2 drop-pizza transition-transform duration-700 hover:rotate-45"
              />
              {c.tag && (
                <span className="absolute right-3 top-3 rotate-6 rounded-full border-2 border-ink bg-cheese px-2 py-0.5 text-xs font-bold text-ink">
                  {c.tag}
                </span>
              )}
              <h3 className="font-display text-3xl font-extrabold">{c.name}</h3>
              <p className="mt-1 text-sm text-primary-foreground/80">{c.note}</p>
              <p className="mt-4 font-display text-3xl font-extrabold text-cheese">
                {formatPKR(c.price)}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center font-hand text-2xl text-cheese">
          Ask about our 14" stuffed crust on call!
        </p>
      </div>
    </section>
  );
}

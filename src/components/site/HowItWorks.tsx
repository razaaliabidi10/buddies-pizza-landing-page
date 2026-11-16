import { Bike, ShoppingBag, PhoneCall } from "lucide-react";
import rider from "@/assets/delivery-rider.jpg";
import counter from "@/assets/takeaway-counter.jpg";
import { PHONE_PRIMARY } from "@/lib/menu";

const steps = [
  { icon: PhoneCall, title: "Call or tap order", text: `Ring ${PHONE_PRIMARY} or order online.` },
  { icon: ShoppingBag, title: "We fire it up", text: "Made fresh the moment you order." },
  { icon: Bike, title: "Hot at your door", text: "Our riders bring it straight to you." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative overflow-hidden bg-ink px-3 py-20 text-cream md:px-6">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-hand text-3xl text-cheese">no dine-in, no problem</p>
          <h2 className="font-display text-5xl font-extrabold leading-[0.9] md:text-7xl">
            Your couch is our <span className="text-primary">dining room.</span>
          </h2>
          <p className="mt-5 max-w-xl text-cream/75">
            Buddies is a delivery and takeaway kitchen. We put everything into the pizza,
            not the chairs — so it gets to you faster, hotter and cheaper.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            { img: rider, title: "Delivery", text: "Hot bag, quick rider, straight to your gate.", alt: "Delivery rider on a motorbike at dusk" },
            { img: counter, title: "Takeaway", text: "Call ahead, swing by, grab your boxes hot.", alt: "Pizza boxes handed over the takeaway counter" },
          ].map((c, i) => (
            <article
              key={c.title}
              className={`group relative overflow-hidden rounded-3xl border-2 border-cream/80 ${i ? "md:mt-12" : ""}`}
            >
              <img
                src={c.img}
                alt={c.alt}
                loading="lazy"
                width={1200}
                height={1200}
                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-5xl font-extrabold text-cheese">{c.title}</h3>
                <p className="text-cream/85">{c.text}</p>
              </div>
            </article>
          ))}
        </div>

        <ol className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-4 rounded-2xl border-2 border-dashed border-cream/30 p-5">
              <span className="font-display text-5xl font-extrabold text-primary">0{i + 1}</span>
              <div>
                <s.icon className="mb-2 size-6 text-cheese" />
                <h4 className="font-display text-xl font-extrabold">{s.title}</h4>
                <p className="text-sm text-cream/70">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

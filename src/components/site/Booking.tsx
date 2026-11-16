import { useState } from "react";
import { Bike, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { deals, familyDeal, formatPKR, sizes, stuffedCrust } from "@/lib/menu";

const field =
  "w-full rounded-xl border-2 border-ink bg-card px-4 py-3 text-base text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-cheese";

export function Booking() {
  const [mode, setMode] = useState<"delivery" | "takeaway">("delivery");

  const options = [
    ...sizes.map((s) => `${s.name} Pizza — ${formatPKR(s.price)}`),
    `${stuffedCrust.name} — ${formatPKR(stuffedCrust.price)}`,
    ...deals.map((d) => `${d.name}: ${d.items.join(", ")} — ${formatPKR(d.price!)}`),
    `${familyDeal.name} — price on call`,
  ];

  return (
    <section id="book" className="px-3 py-20 md:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="lg:pt-6">
          <p className="font-hand text-3xl text-primary">party? match night? late shift?</p>
          <h2 className="font-display text-5xl font-extrabold leading-[0.9] md:text-7xl">
            Book your order ahead
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Pick a time and we’ll have it ready — delivered to your door or packed for pickup.
            We’ll call you to confirm.
          </p>
          <div className="mt-8 inline-block -rotate-2 rounded-2xl border-2 border-ink bg-cheese p-5 shadow-sticker">
            <p className="font-display text-xl font-extrabold">Heads up!</p>
            <p className="text-sm">We don’t have dine-in seating. Delivery & takeaway only.</p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Booking request received!", {
              description: "We'll call you shortly to confirm your order.",
            });
            e.currentTarget.reset();
          }}
          className="grain relative rounded-3xl border-2 border-ink bg-primary p-6 shadow-sticker-lg md:p-8"
        >
          <div className="mb-6 grid grid-cols-2 gap-2 rounded-full border-2 border-ink bg-card p-1.5">
            {(["delivery", "takeaway"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                aria-pressed={mode === m}
                className={`flex items-center justify-center gap-2 rounded-full py-2.5 font-display font-extrabold uppercase transition-colors ${
                  mode === m ? "bg-ink text-cheese" : "text-ink hover:bg-secondary"
                }`}
              >
                {m === "delivery" ? <Bike className="size-4" /> : <ShoppingBag className="size-4" />}
                {m}
              </button>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-1.5">
              <span className="text-sm font-bold text-primary-foreground">Your name</span>
              <input required name="name" className={field} placeholder="Ali Khan" />
            </label>
            <label className="space-y-1.5">
              <span className="text-sm font-bold text-primary-foreground">Phone</span>
              <input required name="phone" type="tel" className={field} placeholder="03XX-XXXXXXX" />
            </label>
            <label className="space-y-1.5">
              <span className="text-sm font-bold text-primary-foreground">Date</span>
              <input required name="date" type="date" className={field} />
            </label>
            <label className="space-y-1.5">
              <span className="text-sm font-bold text-primary-foreground">
                {mode === "delivery" ? "Deliver at" : "Pickup at"}
              </span>
              <input required name="time" type="time" className={field} />
            </label>
            <label className="space-y-1.5 sm:col-span-2">
              <span className="text-sm font-bold text-primary-foreground">What are you craving?</span>
              <select required name="item" className={field} defaultValue="">
                <option value="" disabled>
                  Choose a pizza or deal
                </option>
                {options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
            {mode === "delivery" && (
              <label className="space-y-1.5 sm:col-span-2">
                <span className="text-sm font-bold text-primary-foreground">Delivery address</span>
                <input required name="address" className={field} placeholder="House, street, area" />
              </label>
            )}
            <label className="space-y-1.5 sm:col-span-2">
              <span className="text-sm font-bold text-primary-foreground">Notes (optional)</span>
              <textarea name="notes" rows={3} className={field} placeholder="Extra chilli, no onions, ring the bell twice…" />
            </label>
          </div>

          <Button type="submit" variant="cheese" size="xl" className="mt-6 w-full">
            Book my {mode}
          </Button>
        </form>
      </div>
    </section>
  );
}

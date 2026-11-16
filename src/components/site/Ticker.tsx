const words = [
  "Delivery",
  "Takeaway",
  "Stuffed crust",
  "Deals from Rs. 549",
  "Hot & fresh",
  "Call 0342-2455974",
];

export function Ticker({ tone = "cheese" }: { tone?: "cheese" | "ink" }) {
  const cls =
    tone === "cheese" ? "bg-cheese text-ink" : "bg-ink text-cheese";
  const row = [...words, ...words];
  return (
    <div className={`grain overflow-hidden border-y-2 border-ink py-3 ${cls}`}>
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {[...row, ...row].map((w, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl font-extrabold uppercase">
            {w}
            <span aria-hidden className="text-primary">✺</span>
          </span>
        ))}
      </div>
    </div>
  );
}

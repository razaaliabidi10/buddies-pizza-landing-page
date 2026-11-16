import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Ticker } from "@/components/site/Ticker";
import { Sizes } from "@/components/site/Sizes";
import { Deals } from "@/components/site/Deals";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Booking } from "@/components/site/Booking";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Buddies Pizza — Delivery & Takeaway Pizza Deals" },
      {
        name: "description",
        content:
          "Fresh, cheesy pizza delivered hot or ready for pickup. Sizes from Rs. 300, stuffed crust and buddy deals. Delivery & takeaway only.",
      },
      { property: "og:title", content: "Buddies Pizza — Delivery & Takeaway" },
      {
        property: "og:description",
        content: "Hot, cheesy pizza at your door. Deals from Rs. 549. Book your order ahead.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Sizes />
        <Deals />
        <HowItWorks />
        <Ticker tone="ink" />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import breadsticksImg from "@/assets/breadsticks.jpg";
import pastaImg from "@/assets/pasta.jpg";
import saladImg from "@/assets/salad.jpg";
import wineImg from "@/assets/wine.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Olive Garden Gift Cards & Special Offers" },
      {
        name: "description",
        content:
          "Claim Olive Garden gift cards and dining offers. Digital delivery, valid at all locations.",
      },
    ],
  }),
});

const OFFER_URL = "https://giftclick.org/aff_c?offer_id=4334&aff_id=170098";

function CTAButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={OFFER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-base font-semibold tracking-wide text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.78_0.16_80/0.6)] transition-all hover:scale-[1.02] hover:shadow-[0_14px_50px_-10px_oklch(0.78_0.16_80/0.7)]"
    >
      {children}
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Olive Garden Italian dining spread"
            className="h-full w-full object-cover opacity-40"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        </div>

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center md:py-32">
          <p className="font-serif text-sm uppercase tracking-[0.4em] text-accent">
            Olive Garden
          </p>
          <h1 className="mt-6 font-serif text-4xl font-light leading-tight md:text-6xl">
            Olive Garden Gift Cards
            <span className="block text-primary">& Special Offers</span>
          </h1>
          <p className="mt-6 text-sm tracking-widest text-muted-foreground md:text-base">
            DIGITAL DELIVERY · VALID AT ALL LOCATIONS
          </p>
          <div className="mt-10">
            <CTAButton>Claim Your Offer Now</CTAButton>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-light md:text-4xl">
            Choose Your Offer
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-primary" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              img: breadsticksImg,
              title: "Digital Gift Cards",
              desc: "Send the gift of Italian dining instantly. Delivered straight to your inbox.",
            },
            {
              img: wineImg,
              title: "Buy One, Take One",
              desc: "Enjoy a meal in the restaurant and take a second one home for tomorrow.",
            },
          ].map((o) => (
            <a
              key={o.title}
              href={OFFER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={o.img}
                  alt={o.title}
                  loading="lazy"
                  width={768}
                  height={480}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl">{o.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{o.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-light md:text-4xl">How It Works</h2>
          <div className="mx-auto mt-4 h-px w-16 bg-primary" />
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { n: "01", t: "Choose", d: "Select the offer that suits you best." },
            { n: "02", t: "Claim", d: "Complete a quick, secure form online." },
            { n: "03", t: "Enjoy", d: "Receive your reward and dine in style." },
          ].map((s) => (
            <div key={s.n} className="text-center">
              <p className="font-serif text-3xl text-primary">{s.n}</p>
              <h3 className="mt-3 font-serif text-lg">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[breadsticksImg, pastaImg, saladImg, wineImg].map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-xl">
              <img
                src={src}
                alt="Olive Garden dish"
                loading="lazy"
                width={400}
                height={400}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-light md:text-4xl">Questions</h2>
          <div className="mx-auto mt-4 h-px w-16 bg-primary" />
        </div>
        <div className="space-y-4">
          {[
            {
              q: "How is the gift card delivered?",
              a: "Digitally via email, immediately after you complete the form.",
            },
            {
              q: "Where can I redeem it?",
              a: "At any Olive Garden location across the United States.",
            },
            {
              q: "Is there a cost to claim?",
              a: "Claiming is free. Standard participation requirements apply.",
            },
          ].map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-border bg-card px-5 py-4 transition-colors open:border-primary"
            >
              <summary className="cursor-pointer list-none font-serif text-base">
                {f.q}
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="font-serif text-3xl font-light md:text-4xl">
          Ready to dine on us?
        </h2>
        <p className="mt-4 text-muted-foreground">
          Claim your Olive Garden offer in just a moment.
        </p>
        <div className="mt-8">
          <CTAButton>Claim Your Offer Now</CTAButton>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Olive Garden Offers. Not affiliated with the
        restaurant brand.
      </footer>
    </div>
  );
}


import { createFileRoute } from "@tanstack/react-router";

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
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center">
          <p className="font-serif text-sm uppercase tracking-[0.4em] text-accent">
            Olive Garden
          </p>
          <h1 className="mt-6 font-serif text-4xl font-light leading-tight md:text-5xl">
            Olive Garden Gift Cards
            <span className="block text-primary">& Special Offers</span>
          </h1>
          <p className="mt-6 text-xs tracking-widest text-muted-foreground md:text-sm">
            DIGITAL DELIVERY · VALID AT ALL LOCATIONS
          </p>
          <div className="mt-8">
            <CTAButton>Claim Your Offer Now</CTAButton>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-2xl font-light md:text-3xl">How It Works</h2>
          <div className="mx-auto mt-3 h-px w-12 bg-primary" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { n: "01", t: "Choose", d: "Select the offer that suits you best." },
            { n: "02", t: "Claim", d: "Complete a quick, secure form online." },
            { n: "03", t: "Enjoy", d: "Receive your reward and dine in style." },
          ].map((s) => (
            <div key={s.n} className="text-center">
              <p className="font-serif text-2xl text-primary">{s.n}</p>
              <h3 className="mt-2 font-serif text-base">{s.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-2xl px-6 py-12">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-2xl font-light md:text-3xl">Questions</h2>
          <div className="mx-auto mt-3 h-px w-12 bg-primary" />
        </div>
        <div className="space-y-3">
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
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="font-serif text-2xl font-light md:text-3xl">
          Ready to dine on us?
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Claim your Olive Garden offer in just a moment.
        </p>
        <div className="mt-6">
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


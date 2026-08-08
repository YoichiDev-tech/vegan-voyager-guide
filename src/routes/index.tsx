import { createFileRoute } from "@tanstack/react-router";

import heroBowl from "@/assets/hero-bowl.jpg";
import portrait from "@/assets/portrait.jpg";
import cityLisbon from "@/assets/city-lisbon.jpg";
import cityBali from "@/assets/city-bali.jpg";
import cityRome from "@/assets/city-rome.jpg";
import gridTacos from "@/assets/grid-tacos.jpg";
import gridPancakes from "@/assets/grid-pancakes.jpg";
import gridMatcha from "@/assets/grid-matcha.jpg";
import gridBurger from "@/assets/grid-burger.jpg";
import gridSalad from "@/assets/grid-salad.jpg";
import gridDessert from "@/assets/grid-dessert.jpg";

const IG = "https://www.instagram.com/vicsveganeats";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vic's Vegan Eats — Plant-Based Food & Travel Guides" },
      {
        name: "description",
        content:
          "Vegan city guides, honest restaurant picks and colourful plant-based food from around the world, by Vic's Vegan Eats.",
      },
      { property: "og:title", content: "Vic's Vegan Eats — Plant-Based Food & Travel Guides" },
      {
        property: "og:description",
        content:
          "Vegan city guides, honest restaurant picks and colourful plant-based food from around the world.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const guides = [
  {
    city: "Lisbon",
    img: cityLisbon,
    tag: "Sunny & cheap",
    blurb: "Tascas gone plant-based, pastéis de nata that happen to be vegan, and the best €7 lunch in Europe.",
    spots: "14 spots",
  },
  {
    city: "Bali",
    img: cityBali,
    tag: "Smoothie heaven",
    blurb: "Canggu to Ubud: warungs, jungle brunches and the smoothie bowls that started it all.",
    spots: "21 spots",
  },
  {
    city: "Rome",
    img: cityRome,
    tag: "Carb loading",
    blurb: "Yes, you can eat vegan in Rome. Cacio e pepe alternatives, pizza al taglio and gelato stops.",
    spots: "11 spots",
  },
];

const grid = [
  { img: gridTacos, alt: "Vegan tacos with green sauce", likes: "12.4k" },
  { img: gridPancakes, alt: "Vegan pancakes with berries", likes: "9.8k" },
  { img: gridMatcha, alt: "Iced matcha oat latte", likes: "18.1k" },
  { img: gridBurger, alt: "Vegan burger with sweet potato fries", likes: "7.2k" },
  { img: gridSalad, alt: "Rainbow quinoa salad jar", likes: "5.6k" },
  { img: gridDessert, alt: "Vegan chocolate tart with raspberries", likes: "15.3k" },
];

const marquee = [
  "🌱 100% plant-based",
  "✈️ 32 cities",
  "🥑 no sponsored fluff",
  "🍜 street food first",
  "🌍 eat green, travel far",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b-2 border-ink bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <span className="font-display text-lg font-extrabold tracking-tight">
            vic&apos;s<span className="text-primary">vegan</span>eats
          </span>
          <nav className="hidden gap-6 text-sm font-medium sm:flex">
            <a href="#guides" className="hover:text-primary">Guides</a>
            <a href="#feed" className="hover:text-primary">Feed</a>
            <a href="#about" className="hover:text-primary">About</a>
          </nav>
          <a
            href={IG}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-ink bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground shadow-[3px_3px_0_var(--color-ink)] transition-transform hover:-translate-y-0.5"
          >
            Follow
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <span className="chip bg-mango">🌿 vegan food + travel</span>
            <h1 className="mt-5 text-5xl font-extrabold leading-[0.95] md:text-7xl">
              Eat green,
              <br />
              <span className="text-primary">travel</span> greener.
            </h1>
            <p className="mt-5 max-w-md text-base text-muted-foreground md:text-lg">
              Hi, I&apos;m Vic. I hunt down the most delicious plant-based food on the planet and
              turn it into city guides you can actually eat your way through.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#guides"
                className="rounded-full border-2 border-ink bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[5px_5px_0_var(--color-ink)] transition-transform hover:-translate-y-0.5"
              >
                Browse the guides
              </a>
              <a
                href={IG}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-ink bg-card px-6 py-3 text-sm font-bold shadow-[5px_5px_0_var(--color-ink)] transition-transform hover:-translate-y-0.5"
              >
                @vicsveganeats
              </a>
            </div>
            <dl className="mt-9 flex gap-8">
              {[
                ["32", "cities"],
                ["480+", "vegan spots"],
                ["1M+", "hungry people"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-2xl font-extrabold text-primary">{n}</dt>
                  <dd className="text-xs uppercase tracking-widest text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-mango" aria-hidden />
            <div className="absolute -bottom-6 -right-4 h-32 w-32 rounded-full bg-sky" aria-hidden />
            <img
              src={heroBowl}
              alt="Colourful vegan buddha bowl with avocado, mango and chickpeas"
              width={1408}
              height={1008}
              className="relative w-full rounded-[2rem] border-2 border-ink object-cover shadow-[10px_10px_0_var(--color-ink)]"
            />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y-2 border-ink bg-lime py-3 text-ink">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 gap-10 pr-10 text-sm font-bold uppercase tracking-widest">
              {marquee.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Guides */}
      <section id="guides" className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-3xl font-extrabold md:text-5xl">City guides</h2>
          <p className="text-sm text-muted-foreground">Every spot personally eaten at. No exceptions.</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {guides.map((g) => (
            <article key={g.city} className="surface-card overflow-hidden transition-transform hover:-translate-y-1">
              <img
                src={g.img}
                alt={`Vegan food in ${g.city}`}
                width={900}
                height={1100}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-extrabold">{g.city}</h3>
                  <span className="chip bg-secondary">{g.spots}</span>
                </div>
                <span className="chip bg-mango">{g.tag}</span>
                <p className="text-sm text-muted-foreground">{g.blurb}</p>
                <a
                  href={IG}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-bold text-primary underline underline-offset-4"
                >
                  See the guide →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Feed */}
      <section id="feed" className="border-y-2 border-ink bg-secondary py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-3xl font-extrabold md:text-5xl">Straight from the feed</h2>
            <a
              href={IG}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-ink bg-card px-5 py-2 text-sm font-bold shadow-[4px_4px_0_var(--color-ink)]"
            >
              See all on Instagram
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
            {grid.map((p) => (
              <a
                key={p.alt}
                href={IG}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-3xl border-2 border-ink shadow-[5px_5px_0_var(--color-ink)]"
              >
                <img
                  src={p.img}
                  alt={p.alt}
                  width={900}
                  height={900}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="chip absolute bottom-3 left-3 bg-card">♥ {p.likes}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="relative">
          <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-berry" aria-hidden />
          <img
            src={portrait}
            alt="Vic holding a colourful vegan smoothie bowl at a market"
            width={900}
            height={1100}
            loading="lazy"
            className="relative w-full rounded-[2rem] border-2 border-ink object-cover shadow-[10px_10px_0_var(--color-ink)]"
          />
        </div>
        <div>
          <span className="chip bg-sky">about vic</span>
          <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
            Proof that vegan food is never boring.
          </h2>
          <p className="mt-4 text-muted-foreground">
            I started posting plant-based plates from my kitchen and somehow ended up eating my way
            through 32 countries. Now I map out the best vegan spots in every city I land in, from
            €2 street food to the tasting menus worth planning a trip around.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Every recommendation is tried, paid for and honest.",
              "Guides built for real travel days, not perfect itineraries.",
              "Budget, mid and treat-yourself options in every city.",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span aria-hidden>🌱</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="surface-card bg-primary p-8 text-center text-primary-foreground md:p-14">
          <h2 className="text-3xl font-extrabold md:text-5xl">Hungry yet?</h2>
          <p className="mx-auto mt-3 max-w-md opacity-90">
            New vegan spots, city guides and very green plates — several times a week.
          </p>
          <a
            href={IG}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block rounded-full border-2 border-ink bg-mango px-8 py-3 text-sm font-bold text-ink shadow-[5px_5px_0_var(--color-ink)] transition-transform hover:-translate-y-0.5"
          >
            Follow @vicsveganeats
          </a>
        </div>
      </section>

      <footer className="border-t-2 border-ink py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Vic&apos;s Vegan Eats · Plant-based food & travel
      </footer>
    </div>
  );
}

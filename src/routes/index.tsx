import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Trophy, Swords, Users, Zap, Play, ChevronRight, Radio } from "lucide-react";
import heroImg from "@/assets/hero-arena.jpg";
import playerImg from "@/assets/player.jpg";
import trophyImg from "@/assets/trophy.jpg";
import stadiumImg from "@/assets/stadium.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

function Index() {
  return (
    <>
      <Hero />
      <LiveTicker />
      <Tournaments />
      <Showcase />
      <Stats />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="" width={1920} height={1088} className="h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-neon-red)]/20 via-transparent to-[var(--color-neon-blue)]/20 mix-blend-screen" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 md:grid-cols-12">
        <div className="md:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 border border-[var(--color-neon-pink)]/40 bg-black/40 px-4 py-1.5 text-xs font-black uppercase tracking-[0.3em] text-[var(--color-neon-pink)] backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-neon-red)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-neon-red)]" />
            </span>
            Season 07 · Live Worldwide
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-6xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-7xl md:text-8xl"
          >
            The stage is <br />
            <span className="text-shimmer">yours to burn.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-8 max-w-xl text-lg text-muted-foreground"
          >
            Global esports tournaments, cinematic broadcasts, million dollar prize pools.
            Register your squad and fight for the crown across five continents.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/tournaments"
              className="clip-arrow group inline-flex items-center gap-3 bg-gradient-to-r from-[var(--color-neon-red)] via-[var(--color-neon-pink)] to-[var(--color-neon-blue)] px-8 py-4 text-sm font-black uppercase tracking-[0.25em] text-white transition hover:brightness-125 glow-pink"
            >
              Register Squad <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <button className="inline-flex items-center gap-3 border border-white/20 bg-white/5 px-8 py-4 text-sm font-black uppercase tracking-[0.25em] text-white backdrop-blur transition hover:bg-white/10">
              <Play className="h-4 w-4 fill-current" /> Watch Trailer
            </button>
          </motion.div>
        </div>

        {/* Side stat panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="md:col-span-4 md:self-end"
        >
          <div className="clip-slant border border-white/10 bg-black/50 p-8 backdrop-blur-xl">
            <div className="text-xs font-black uppercase tracking-[0.3em] text-[var(--color-neon-blue)]">Prize Pool</div>
            <div className="mt-2 font-display text-5xl font-black text-white">$12.4M</div>
            <div className="mt-8 space-y-4">
              {[
                { l: "Teams Registered", v: "1,284" },
                { l: "Matches This Week", v: "312" },
                { l: "Countries", v: "78" },
              ].map((s) => (
                <div key={s.l} className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{s.l}</span>
                  <span className="font-display text-xl font-bold text-white">{s.v}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[13px] uppercase tracking-[0.4em] text-muted-foreground">
        <span className="animate-pulse">▼ Scroll ▼</span>
      </div>
    </section>
  );
}

function LiveTicker() {
  const items = [
    "PHNX vs VOID — LIVE NOW",
    "GRAND FINALS · TOKYO ARENA · SAT 8PM",
    "PRIZE POOL UPDATED · $12.4M",
    "NEW REGION UNLOCKED · MENA",
    "SEASON 07 QUALIFIERS OPEN",
    "STREAM PEAK · 2.1M VIEWERS",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="relative border-y border-white/10 bg-black/60 py-4 backdrop-blur">
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee gap-12 whitespace-nowrap pr-12">
          {doubled.map((t, i) => (
            <span key={i} className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em]">
              <Radio className="h-3 w-3 text-[var(--color-neon-red)]" />
              <span className="text-white">{t}</span>
              <span className="text-[var(--color-neon-pink)]">/</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const tournaments = [
  {
    title: "Crimson Cup",
    tag: "FPS · 5v5",
    prize: "$3.2M",
    date: "Aug 14 — 22",
    location: "Los Angeles",
    tint: "from-[var(--color-neon-red)]/70 to-transparent",
    color: "var(--color-neon-red)",
  },
  {
    title: "Neon Rift",
    tag: "MOBA · Global",
    prize: "$5.0M",
    date: "Sep 03 — 12",
    location: "Seoul",
    tint: "from-[var(--color-neon-pink)]/70 to-transparent",
    color: "var(--color-neon-pink)",
  },
  {
    title: "Blue Circuit",
    tag: "Racing · Solo",
    prize: "$1.8M",
    date: "Oct 18 — 20",
    location: "Berlin",
    tint: "from-[var(--color-neon-blue)]/70 to-transparent",
    color: "var(--color-neon-blue)",
  },
];

function Tournaments() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 text-xs font-black uppercase tracking-[0.4em] text-[var(--color-neon-pink)]">01 · Upcoming</div>
            <h2 className="font-display text-5xl font-black uppercase leading-none text-white md:text-6xl">
              Battles on <br /> the horizon.
            </h2>
          </div>
          <Link to="/tournaments" className="group inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.3em] text-white hover:text-[var(--color-neon-pink)]">
            View all <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {tournaments.map((t, i) => (
            <motion.article
              key={t.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl"
            >
              <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${t.tint}`}>
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Trophy className="h-24 w-24" style={{ color: t.color }} />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1" style={{ background: t.color, boxShadow: `0 0 24px ${t.color}` }} />
              </div>
              <div className="p-6">
                <div className="text-[13px] font-black uppercase tracking-[0.4em]" style={{ color: t.color }}>{t.tag}</div>
                <h3 className="mt-2 font-display text-3xl font-black uppercase text-white">{t.title}</h3>
                <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                  <span>{t.date}</span>
                  <span>{t.location}</span>
                </div>
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <div className="text-[13px] uppercase tracking-widest text-muted-foreground">Prize</div>
                    <div className="font-display text-2xl font-black text-white">{t.prize}</div>
                  </div>
                  <button className="border border-white/20 px-4 py-2 text-[13px] font-black uppercase tracking-[0.3em] text-white transition group-hover:border-transparent group-hover:bg-white group-hover:text-black">
                    Enter
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section className="relative py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="relative overflow-hidden border border-white/10">
            <img src={playerImg} alt="Pro player concentrating" width={1280} height={1600} loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-neon-red)]/30 via-transparent to-[var(--color-neon-blue)]/30 mix-blend-overlay" />
          </div>
          <div className="absolute -bottom-6 -right-6 border border-[var(--color-neon-pink)]/40 bg-black/80 p-6 backdrop-blur-xl glow-pink">
            <div className="text-[13px] uppercase tracking-[0.3em] text-[var(--color-neon-pink)]">Player Focus</div>
            <div className="mt-2 font-display text-2xl font-black text-white">"Kaito" — MVP</div>
          </div>
        </motion.div>

        <motion.div {...fadeUp}>
          <div className="mb-4 text-xs font-black uppercase tracking-[0.4em] text-[var(--color-neon-blue)]">02 · The Craft</div>
          <h2 className="font-display text-5xl font-black uppercase leading-none text-white md:text-6xl">
            Every second, <br /> a cinematic.
          </h2>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            We film esports the way blockbusters are shot. Multi-angle rigs, drone cams, a resident score composer,
            and a director for every stage. The players bring the plays — we bring the movie.
          </p>
          <div className="mt-10 space-y-4">
            {[
              { icon: Swords, label: "60+ dedicated camera operators per finals" },
              { icon: Zap, label: "Live pyro, LED floors, holographic overlays" },
              { icon: Users, label: "Broadcast in 24 languages simultaneously" },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-4 border-l-2 border-[var(--color-neon-pink)] bg-white/5 px-5 py-4">
                <f.icon className="h-5 w-5 text-[var(--color-neon-pink)]" />
                <span className="text-sm text-white">{f.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: "2.1M", l: "Peak Viewers" },
    { v: "78", l: "Countries" },
    { v: "$12.4M", l: "Prize Pool" },
    { v: "1,284", l: "Teams" },
  ];
  return (
    <section className="relative isolate overflow-hidden py-32">
      <div className="absolute inset-0 -z-10">
        <img src={stadiumImg} alt="" width={1920} height={1088} loading="lazy" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="mb-16 text-center">
          <div className="mb-4 text-xs font-black uppercase tracking-[0.4em] text-[var(--color-neon-red)]">03 · By The Numbers</div>
          <h2 className="font-display text-5xl font-black uppercase leading-none text-white md:text-7xl">
            A global <span className="text-shimmer">phenomenon.</span>
          </h2>
        </motion.div>
        <div className="grid gap-px bg-white/10 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-background p-10 text-center transition hover:bg-black/60"
            >
              <div className="font-display text-6xl font-black text-white transition group-hover:text-[var(--color-neon-pink)]">{s.v}</div>
              <div className="mt-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-black via-black/80 to-black p-12 md:p-20"
        >
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--color-neon-red)]/40 blur-3xl animate-pulse-glow" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[var(--color-neon-blue)]/40 blur-3xl animate-pulse-glow" />
          <img src={trophyImg} alt="" width={1280} height={1280} loading="lazy" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-30 mix-blend-screen" />
          <div className="relative max-w-xl">
            <div className="mb-4 text-xs font-black uppercase tracking-[0.4em] text-[var(--color-neon-pink)]">04 · Your Turn</div>
            <h2 className="font-display text-5xl font-black uppercase leading-none text-white md:text-7xl">
              Bring your <br /> <span className="text-shimmer">legacy.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Season 07 registration closes in 14 days. Assemble your five, sign the roster, and we'll see you on stage.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/tournaments"
                className="clip-arrow inline-flex items-center gap-3 bg-gradient-to-r from-[var(--color-neon-red)] via-[var(--color-neon-pink)] to-[var(--color-neon-blue)] px-8 py-4 text-sm font-black uppercase tracking-[0.25em] text-white transition hover:brightness-125 glow-pink"
              >
                Register now <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 border border-white/20 px-8 py-4 text-sm font-black uppercase tracking-[0.25em] text-white transition hover:bg-white/10"
              >
                Learn more
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

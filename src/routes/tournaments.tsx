import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Trophy, Calendar, MapPin, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/tournaments")({
  head: () => ({
    meta: [
      { title: "Tournaments — NEONCLASH" },
      { name: "description", content: "Browse upcoming, live, and past NEONCLASH esports tournaments across every region." },
      { property: "og:title", content: "Tournaments — NEONCLASH" },
      { property: "og:description", content: "Browse upcoming, live, and past NEONCLASH esports tournaments." },
    ],
  }),
  component: TournamentsPage,
});

const list = [
  { title: "Crimson Cup", tag: "FPS · 5v5", prize: "$3.2M", date: "Aug 14 — 22", location: "Los Angeles", status: "Registration Open", color: "var(--color-neon-red)" },
  { title: "Neon Rift", tag: "MOBA · Global", prize: "$5.0M", date: "Sep 03 — 12", location: "Seoul", status: "Registration Open", color: "var(--color-neon-pink)" },
  { title: "Blue Circuit", tag: "Racing · Solo", prize: "$1.8M", date: "Oct 18 — 20", location: "Berlin", status: "Coming Soon", color: "var(--color-neon-blue)" },
  { title: "Voidstorm", tag: "Fighting · 1v1", prize: "$900K", date: "Nov 02 — 05", location: "Tokyo", status: "Registration Open", color: "var(--color-neon-pink)" },
  { title: "Ember Rally", tag: "Battle Royale", prize: "$2.4M", date: "Nov 22 — 30", location: "São Paulo", status: "Coming Soon", color: "var(--color-neon-red)" },
  { title: "Frostline", tag: "RTS · 1v1", prize: "$600K", date: "Dec 08 — 12", location: "Reykjavík", status: "Coming Soon", color: "var(--color-neon-blue)" },
];

function TournamentsPage() {
  return (
    <>
      <section className="relative border-b border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-4 text-xs font-black uppercase tracking-[0.4em] text-[var(--color-neon-pink)]">Season 07</div>
            <h1 className="font-display text-6xl font-black uppercase leading-none text-white md:text-8xl">
              All <span className="text-shimmer">tournaments.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Pick your battlefield. Every event streams live and pays out to the last team standing.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl space-y-4 px-6">
          {list.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group grid grid-cols-1 items-center gap-6 border border-white/10 bg-black/40 p-6 backdrop-blur-xl transition hover:border-white/30 md:grid-cols-12"
            >
              <div className="md:col-span-1">
                <div className="flex h-14 w-14 items-center justify-center border" style={{ borderColor: t.color, color: t.color, boxShadow: `0 0 24px -8px ${t.color}` }}>
                  <Trophy className="h-6 w-6" />
                </div>
              </div>
              <div className="md:col-span-4">
                <div className="text-[13px] font-black uppercase tracking-[0.4em]" style={{ color: t.color }}>{t.tag}</div>
                <h3 className="mt-1 font-display text-3xl font-black uppercase text-white">{t.title}</h3>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground md:col-span-2">
                <Calendar className="h-4 w-4" /> {t.date}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground md:col-span-2">
                <MapPin className="h-4 w-4" /> {t.location}
              </div>
              <div className="md:col-span-2">
                <div className="text-[13px] uppercase tracking-widest text-muted-foreground">Prize</div>
                <div className="font-display text-xl font-black text-white">{t.prize}</div>
              </div>
              <div className="md:col-span-1">
                <button className="clip-arrow flex w-full items-center justify-center gap-1 bg-gradient-to-r from-[var(--color-neon-red)] to-[var(--color-neon-pink)] px-4 py-3 text-[13px] font-black uppercase tracking-[0.3em] text-white transition hover:brightness-125">
                  Enter <ChevronRight className="h-3 w-3" />
                </button>
              </div>
            </motion.div>
          ))}
          <div className="pt-10 text-center">
            <Link to="/" className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground hover:text-white">← Back home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
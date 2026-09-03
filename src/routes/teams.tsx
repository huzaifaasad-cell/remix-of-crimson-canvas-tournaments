import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Shield } from "lucide-react";

export const Route = createFileRoute("/teams")({
  head: () => ({
    meta: [
      { title: "Teams — NEONCLASH" },
      { name: "description", content: "Meet the world's top esports teams competing in NEONCLASH Season 07." },
      { property: "og:title", content: "Teams — NEONCLASH" },
      { property: "og:description", content: "Meet the world's top esports teams competing in NEONCLASH." },
    ],
  }),
  component: TeamsPage,
});

const teams = [
  { name: "Phantom Squad", tag: "PHNX", wins: 47, region: "NA", color: "var(--color-neon-red)" },
  { name: "Void Runners", tag: "VOID", wins: 42, region: "EU", color: "var(--color-neon-pink)" },
  { name: "Neon Wolves", tag: "NWLV", wins: 39, region: "KR", color: "var(--color-neon-blue)" },
  { name: "Crimson Ghosts", tag: "CRIM", wins: 36, region: "BR", color: "var(--color-neon-red)" },
  { name: "Blue Reign", tag: "BLUR", wins: 33, region: "JP", color: "var(--color-neon-blue)" },
  { name: "Rose Legion", tag: "ROSE", wins: 30, region: "SEA", color: "var(--color-neon-pink)" },
  { name: "Onyx Empire", tag: "ONYX", wins: 28, region: "MENA", color: "var(--color-neon-red)" },
  { name: "Ember Kings", tag: "EMBR", wins: 25, region: "OCE", color: "var(--color-neon-pink)" },
];

function TeamsPage() {
  return (
    <>
      <section className="border-b border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-4 text-xs font-black uppercase tracking-[0.4em] text-[var(--color-neon-blue)]">Roster</div>
            <h1 className="font-display text-6xl font-black uppercase leading-none text-white md:text-8xl">
              The <span className="text-shimmer">contenders.</span>
            </h1>
          </motion.div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-4">
          {teams.map((t, i) => (
            <motion.div
              key={t.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden border border-white/10 bg-black/40 p-6 backdrop-blur"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full blur-3xl transition group-hover:scale-150" style={{ background: t.color, opacity: 0.4 }} />
              <Shield className="relative h-10 w-10" style={{ color: t.color }} />
              <div className="relative mt-4 text-xs font-black uppercase tracking-[0.3em]" style={{ color: t.color }}>{t.tag} · {t.region}</div>
              <h3 className="relative mt-2 font-display text-2xl font-black uppercase text-white">{t.name}</h3>
              <div className="relative mt-6 flex items-end justify-between">
                <div>
                  <div className="text-[13px] uppercase tracking-widest text-muted-foreground">Wins</div>
                  <div className="font-display text-3xl font-black text-white">{t.wins}</div>
                </div>
                <div className="text-[13px] uppercase tracking-widest text-muted-foreground">S07</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Trophy,
  Calendar,
  MapPin,
  ChevronRight,
  ArrowLeft,
  Users,
  Radio,
  Clock,
} from "lucide-react";
import { tournaments, getTournament } from "@/lib/tournaments-data";

export const Route = createFileRoute("/tournaments/$slug")({
  head: ({ params }) => {
    const t = getTournament(params.slug);
    const title = t ? `${t.title} — NEONCLASH` : "Tournament — NEONCLASH";
    const desc = t ? `${t.blurb}` : "NEONCLASH tournament details.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: TournamentDetail,
  notFoundComponent: () => (
    <div className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-display text-6xl font-black uppercase text-white">Tournament not found</h1>
        <p className="mt-4 text-muted-foreground">This event doesn't exist or has ended.</p>
        <Link to="/tournaments" className="mt-8 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-[var(--color-neon-pink)] hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Back to tournaments
        </Link>
      </div>
    </div>
  ),
});

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

function TournamentDetail() {
  const { slug } = Route.useParams();
  const t = getTournament(slug);

  if (!t) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-display text-6xl font-black uppercase text-white">Tournament not found</h1>
          <Link to="/tournaments" className="mt-8 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-[var(--color-neon-pink)] hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to tournaments
          </Link>
        </div>
      </div>
    );
  }

  const liveMatch = t.schedule.find((m) => m.status === "live");
  const otherTournaments = tournaments.filter((x) => x.slug !== t.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative border-b border-white/10 py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-30" />
        <div className="mx-auto max-w-7xl px-6">
          <Link to="/tournaments" className="mb-8 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-white">
            <ArrowLeft className="h-4 w-4" /> All tournaments
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 border px-4 py-1.5 text-xs font-black uppercase tracking-[0.3em] backdrop-blur" style={{ borderColor: t.color, color: t.color }}>
                <span className="h-2 w-2 rounded-full" style={{ background: t.color, boxShadow: `0 0 12px ${t.color}` }} />
                {t.tag}
              </span>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">{t.status}</span>
            </div>
            <h1 className="mt-6 font-display text-6xl font-black uppercase leading-none text-white md:text-8xl">
              {t.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{t.blurb}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4">
              <div className="flex items-center gap-2 text-sm text-white">
                <Calendar className="h-4 w-4" style={{ color: t.color }} /> {t.date}
              </div>
              <div className="flex items-center gap-2 text-sm text-white">
                <MapPin className="h-4 w-4" style={{ color: t.color }} /> {t.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-white">
                <Trophy className="h-4 w-4" style={{ color: t.color }} /> {t.prize} prize pool
              </div>
              <div className="flex items-center gap-2 text-sm text-white">
                <Users className="h-4 w-4" style={{ color: t.color }} /> {t.teams.length} teams
              </div>
            </div>
            <div className="mt-10">
              <button className="clip-arrow inline-flex items-center gap-3 px-8 py-4 text-sm font-black uppercase tracking-[0.25em] text-white transition hover:brightness-125" style={{ background: `linear-gradient(to right, var(--color-neon-red), var(--color-neon-pink), var(--color-neon-blue))` }}>
                Register squad <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeUp} className="mb-12">
            <div className="mb-4 text-xs font-black uppercase tracking-[0.4em]" style={{ color: t.color }}>01 · Schedule</div>
            <h2 className="font-display text-5xl font-black uppercase leading-none text-white md:text-6xl">The road to the crown.</h2>
          </motion.div>

          <div className="overflow-hidden border border-white/10">
            {t.schedule.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="grid grid-cols-1 items-center gap-4 border-b border-white/10 bg-black/40 p-5 backdrop-blur-xl transition hover:bg-black/60 last:border-b-0 md:grid-cols-12"
              >
                <div className="md:col-span-2 text-[13px] font-black uppercase tracking-[0.3em] text-muted-foreground">
                  {m.round}
                </div>
                <div className="flex items-center gap-4 md:col-span-7">
                  <TeamBadge tag={m.a} color={teamColor(t, m.a)} winner={m.winner === "a"} />
                  <div className="flex flex-1 flex-col items-center">
                    {m.status === "scheduled" ? (
                      <span className="font-display text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">VS</span>
                    ) : (
                      <span className="font-display text-xl font-black text-white">
                        {m.scoreA} <span className="text-muted-foreground">:</span> {m.scoreB}
                      </span>
                    )}
                  </div>
                  <TeamBadge tag={m.b} color={teamColor(t, m.b)} winner={m.winner === "b"} />
                </div>
                <div className="flex items-center justify-start gap-2 text-[13px] text-muted-foreground md:col-span-2">
                  <Clock className="h-3.5 w-3.5" /> {m.time}
                </div>
                <div className="md:col-span-1">
                  {m.status === "live" ? (
                    <span className="inline-flex items-center gap-1.5 border border-[var(--color-neon-red)] px-2.5 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[var(--color-neon-red)] glow-red">
                      <Radio className="h-3 w-3" /> Live
                    </span>
                  ) : m.status === "done" ? (
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground">Final</span>
                  ) : (
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground">Upcoming</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {liveMatch && (
            <div className="mt-6 flex items-center gap-3 border border-[var(--color-neon-red)] bg-black/60 px-5 py-4 backdrop-blur glow-red">
              <Radio className="h-4 w-4 animate-pulse text-[var(--color-neon-red)]" />
              <span className="text-sm text-white">
                <span className="font-black uppercase tracking-[0.2em] text-[var(--color-neon-red)]">Live now:</span>{" "}
                {liveMatch.a} vs {liveMatch.b} — {liveMatch.round}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Teams + Prize */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <motion.div {...fadeUp}>
            <div className="mb-4 text-xs font-black uppercase tracking-[0.4em]" style={{ color: t.color }}>02 · Contenders</div>
            <h2 className="font-display text-4xl font-black uppercase leading-none text-white md:text-5xl">The field.</h2>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {t.teams.map((team, i) => (
                <motion.div
                  key={team.tag}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group relative flex items-center gap-4 overflow-hidden border border-white/10 bg-black/40 p-4 backdrop-blur transition hover:border-white/30"
                >
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full blur-2xl opacity-40" style={{ background: team.color }} />
                  <div className="relative flex h-10 w-10 items-center justify-center border font-display text-xs font-black" style={{ borderColor: team.color, color: team.color }}>
                    {team.seed}
                  </div>
                  <div className="relative">
                    <div className="font-display text-lg font-black uppercase text-white">{team.name}</div>
                    <div className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground">{team.tag} · {team.region}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp}>
            <div className="mb-4 text-xs font-black uppercase tracking-[0.4em]" style={{ color: t.color }}>03 · Payout</div>
            <h2 className="font-display text-4xl font-black uppercase leading-none text-white md:text-5xl">Prize breakdown.</h2>
            <div className="mt-10 overflow-hidden border border-white/10">
              {t.prizeBreakdown.map((p, i) => (
                <motion.div
                  key={p.place}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center justify-between border-b border-white/10 bg-black/40 px-5 py-5 backdrop-blur last:border-b-0"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-display text-2xl font-black" style={{ color: i === 0 ? t.color : "var(--color-foreground)" }}>{p.place}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-xl font-black text-white">{p.amount}</div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{p.pct} of pool</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 border border-white/10 bg-black/40 px-5 py-4 backdrop-blur">
              <Trophy className="h-5 w-5" style={{ color: t.color }} />
              <span className="text-sm text-muted-foreground">
                Total prize pool: <span className="font-display text-lg font-black text-white">{t.prize}</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other tournaments */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeUp} className="mb-12">
            <div className="mb-4 text-xs font-black uppercase tracking-[0.4em] text-muted-foreground">04 · Up next</div>
            <h2 className="font-display text-4xl font-black uppercase leading-none text-white md:text-5xl">Other arenas.</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {otherTournaments.map((o, i) => (
              <motion.div key={o.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Link to="/tournaments/$slug" params={{ slug: o.slug }} className="group block overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl transition hover:border-white/30">
                  <div className="relative h-40 overflow-hidden bg-gradient-to-br" style={{ background: `linear-gradient(to bottom right, color-mix(in oklab, ${o.color} 60%, transparent), transparent)` }}>
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Trophy className="h-16 w-16" style={{ color: o.color }} />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-[13px] font-black uppercase tracking-[0.4em]" style={{ color: o.color }}>{o.tag}</div>
                    <h3 className="mt-2 font-display text-2xl font-black uppercase text-white">{o.title}</h3>
                    <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" /> {o.date} · {o.location}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function teamColor(t: NonNullable<ReturnType<typeof getTournament>>, tag: string) {
  if (tag === "TBD") return "var(--color-muted-foreground)";
  return t.teams.find((x) => x.tag === tag)?.color ?? "var(--color-neon-pink)";
}

function TeamBadge({ tag, color, winner }: { tag: string; color: string; winner: boolean }) {
  return (
    <div className={`flex items-center gap-2 transition ${winner ? "scale-105" : "opacity-80"}`}>
      <div className={`flex h-9 min-w-9 items-center justify-center border px-2 font-display text-xs font-black ${winner ? "glow-pink" : ""}`} style={{ borderColor: color, color }}>
        {tag}
      </div>
    </div>
  );
}

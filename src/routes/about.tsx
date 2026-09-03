import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — NEONCLASH" },
      { name: "description", content: "NEONCLASH turns competitive gaming into cinema. Learn about the crew behind the world's most watched esports league." },
      { property: "og:title", content: "About — NEONCLASH" },
      { property: "og:description", content: "NEONCLASH turns competitive gaming into cinema." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-4 text-xs font-black uppercase tracking-[0.4em] text-[var(--color-neon-pink)]">Manifesto</div>
          <h1 className="font-display text-6xl font-black uppercase leading-none text-white md:text-7xl">
            We built a <span className="text-shimmer">stage</span> for the fastest hands on Earth.
          </h1>
        </motion.div>

        <div className="mt-16 space-y-8 text-lg text-muted-foreground">
          {[
            "NEONCLASH was founded in 2021 by broadcasters, filmmakers, and pros tired of watching esports be filmed like a boardroom.",
            "We treat every finals like a Bond opening. Cranes. Cinematography. A live orchestra when the moment calls for it.",
            "78 countries. 12.4 million dollars in prize money this season alone. And a single mission: make the plays look as huge as they feel.",
            "This is competitive gaming. Cinematic. Uncompromised. Loud.",
          ].map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-l-2 border-[var(--color-neon-red)] pl-6"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
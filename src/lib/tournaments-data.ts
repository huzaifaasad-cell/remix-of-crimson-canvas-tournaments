// Shared tournament data for NEONCLASH. Pure front-end source of truth so the
// list page, home page, and detail route all stay in sync.

export type Match = {
  round: string;
  a: string;
  b: string;
  scoreA?: number;
  scoreB?: number;
  winner?: "a" | "b";
  status: "live" | "scheduled" | "done";
  time: string;
};

export type TeamRef = {
  tag: string;
  name: string;
  region: string;
  seed: number;
  color: string;
};

export type Tournament = {
  slug: string;
  title: string;
  tag: string;
  prize: string;
  date: string;
  location: string;
  status: string;
  color: string;
  blurb: string;
  teams: TeamRef[];
  schedule: Match[];
  prizeBreakdown: { place: string; amount: string; pct: string }[];
};

export const tournaments: Tournament[] = [
  {
    slug: "crimson-cup",
    title: "Crimson Cup",
    tag: "FPS · 5v5",
    prize: "$3.2M",
    date: "Aug 14 — 22",
    location: "Los Angeles",
    status: "Registration Open",
    color: "var(--color-neon-red)",
    blurb:
      "Eight squads. One arena. The flagship FPS championship of Season 07, played across three days of double-elim group stage into a single-elim finals.",
    teams: [
      { tag: "PHNX", name: "Phantom Squad", region: "NA", seed: 1, color: "var(--color-neon-red)" },
      { tag: "VOID", name: "Void Runners", region: "EU", seed: 2, color: "var(--color-neon-pink)" },
      { tag: "NWLV", name: "Neon Wolves", region: "KR", seed: 3, color: "var(--color-neon-blue)" },
      { tag: "CRIM", name: "Crimson Ghosts", region: "BR", seed: 4, color: "var(--color-neon-red)" },
      { tag: "BLUR", name: "Blue Reign", region: "JP", seed: 5, color: "var(--color-neon-blue)" },
      { tag: "ROSE", name: "Rose Legion", region: "SEA", seed: 6, color: "var(--color-neon-pink)" },
      { tag: "ONYX", name: "Onyx Empire", region: "MENA", seed: 7, color: "var(--color-neon-red)" },
      { tag: "EMBR", name: "Ember Kings", region: "OCE", seed: 8, color: "var(--color-neon-pink)" },
    ],
    schedule: [
      { round: "Quarterfinal", a: "PHNX", b: "EMBR", scoreA: 2, scoreB: 0, winner: "a", status: "done", time: "Aug 14 · 18:00" },
      { round: "Quarterfinal", a: "VOID", b: "ROSE", scoreA: 2, scoreB: 1, winner: "a", status: "done", time: "Aug 14 · 21:00" },
      { round: "Quarterfinal", a: "NWLV", b: "ONYX", scoreA: 1, scoreB: 2, winner: "b", status: "done", time: "Aug 15 · 18:00" },
      { round: "Quarterfinal", a: "CRIM", b: "BLUR", scoreA: 2, scoreB: 1, winner: "a", status: "done", time: "Aug 15 · 21:00" },
      { round: "Semifinal", a: "PHNX", b: "VOID", scoreA: 1, scoreB: 0, winner: "a", status: "live", time: "Aug 21 · 20:00" },
      { round: "Semifinal", a: "ONYX", b: "CRIM", status: "scheduled", time: "Aug 21 · 22:30" },
      { round: "Grand Final", a: "TBD", b: "TBD", status: "scheduled", time: "Aug 22 · 20:00" },
    ],
    prizeBreakdown: [
      { place: "1st", amount: "$1,600,000", pct: "50%" },
      { place: "2nd", amount: "$800,000", pct: "25%" },
      { place: "3rd", amount: "$400,000", pct: "12.5%" },
      { place: "4th", amount: "$240,000", pct: "7.5%" },
      { place: "5–8th", amount: "$40,000 each", pct: "5%" },
    ],
  },
  {
    slug: "neon-rift",
    title: "Neon Rift",
    tag: "MOBA · Global",
    prize: "$5.0M",
    date: "Sep 03 — 12",
    location: "Seoul",
    status: "Registration Open",
    color: "var(--color-neon-pink)",
    blurb:
      "The richest MOBA event of the year. Sixteen teams from five continents fight through a group stage into a best-of-five grand final at Seoul Dome.",
    teams: [
      { tag: "NWLV", name: "Neon Wolves", region: "KR", seed: 1, color: "var(--color-neon-blue)" },
      { tag: "PHNX", name: "Phantom Squad", region: "NA", seed: 2, color: "var(--color-neon-red)" },
      { tag: "VOID", name: "Void Runners", region: "EU", seed: 3, color: "var(--color-neon-pink)" },
      { tag: "ROSE", name: "Rose Legion", region: "SEA", seed: 4, color: "var(--color-neon-pink)" },
      { tag: "CRIM", name: "Crimson Ghosts", region: "BR", seed: 5, color: "var(--color-neon-red)" },
      { tag: "ONYX", name: "Onyx Empire", region: "MENA", seed: 6, color: "var(--color-neon-red)" },
      { tag: "BLUR", name: "Blue Reign", region: "JP", seed: 7, color: "var(--color-neon-blue)" },
      { tag: "EMBR", name: "Ember Kings", region: "OCE", seed: 8, color: "var(--color-neon-pink)" },
    ],
    schedule: [
      { round: "Group A", a: "NWLV", b: "PHNX", status: "scheduled", time: "Sep 03 · 18:00" },
      { round: "Group A", a: "VOID", b: "ROSE", status: "scheduled", time: "Sep 03 · 21:00" },
      { round: "Group B", a: "CRIM", b: "ONYX", status: "scheduled", time: "Sep 04 · 18:00" },
      { round: "Group B", a: "BLUR", b: "EMBR", status: "scheduled", time: "Sep 04 · 21:00" },
      { round: "Playoff", a: "TBD", b: "TBD", status: "scheduled", time: "Sep 10 · 20:00" },
      { round: "Grand Final", a: "TBD", b: "TBD", status: "scheduled", time: "Sep 12 · 20:00" },
    ],
    prizeBreakdown: [
      { place: "1st", amount: "$2,500,000", pct: "50%" },
      { place: "2nd", amount: "$1,250,000", pct: "25%" },
      { place: "3rd", amount: "$625,000", pct: "12.5%" },
      { place: "4th", amount: "$375,000", pct: "7.5%" },
      { place: "5–8th", amount: "$62,500 each", pct: "5%" },
    ],
  },
  {
    slug: "blue-circuit",
    title: "Blue Circuit",
    tag: "Racing · Solo",
    prize: "$1.8M",
    date: "Oct 18 — 20",
    location: "Berlin",
    status: "Coming Soon",
    color: "var(--color-neon-blue)",
    blurb:
      "A solo racing showdown on the neon-lit streets of Berlin. Sixteen drivers, three nights, one lap-time champion.",
    teams: [
      { tag: "NWLV", name: "Neon Wolves", region: "KR", seed: 1, color: "var(--color-neon-blue)" },
      { tag: "BLUR", name: "Blue Reign", region: "JP", seed: 2, color: "var(--color-neon-blue)" },
      { tag: "PHNX", name: "Phantom Squad", region: "NA", seed: 3, color: "var(--color-neon-red)" },
      { tag: "VOID", name: "Void Runners", region: "EU", seed: 4, color: "var(--color-neon-pink)" },
      { tag: "CRIM", name: "Crimson Ghosts", region: "BR", seed: 5, color: "var(--color-neon-red)" },
      { tag: "ROSE", name: "Rose Legion", region: "SEA", seed: 6, color: "var(--color-neon-pink)" },
      { tag: "ONYX", name: "Onyx Empire", region: "MENA", seed: 7, color: "var(--color-neon-red)" },
      { tag: "EMBR", name: "Ember Kings", region: "OCE", seed: 8, color: "var(--color-neon-pink)" },
    ],
    schedule: [
      { round: "Heat 1", a: "NWLV", b: "BLUR", status: "scheduled", time: "Oct 18 · 19:00" },
      { round: "Heat 2", a: "PHNX", b: "VOID", status: "scheduled", time: "Oct 18 · 21:00" },
      { round: "Heat 3", a: "CRIM", b: "ROSE", status: "scheduled", time: "Oct 19 · 19:00" },
      { round: "Heat 4", a: "ONYX", b: "EMBR", status: "scheduled", time: "Oct 19 · 21:00" },
      { round: "Grand Final", a: "TBD", b: "TBD", status: "scheduled", time: "Oct 20 · 20:00" },
    ],
    prizeBreakdown: [
      { place: "1st", amount: "$900,000", pct: "50%" },
      { place: "2nd", amount: "$450,000", pct: "25%" },
      { place: "3rd", amount: "$225,000", pct: "12.5%" },
      { place: "4th", amount: "$135,000", pct: "7.5%" },
      { place: "5–8th", amount: "$22,500 each", pct: "5%" },
    ],
  },
  {
    slug: "voidstorm",
    title: "Voidstorm",
    tag: "Fighting · 1v1",
    prize: "$900K",
    date: "Nov 02 — 05",
    location: "Tokyo",
    status: "Registration Open",
    color: "var(--color-neon-pink)",
    blurb:
      "The world's best fighting-game players in a 32-bracket, single-elim gauntlet. One frame, one fight, one champion.",
    teams: [
      { tag: "NWLV", name: "Neon Wolves", region: "KR", seed: 1, color: "var(--color-neon-blue)" },
      { tag: "PHNX", name: "Phantom Squad", region: "NA", seed: 2, color: "var(--color-neon-red)" },
      { tag: "BLUR", name: "Blue Reign", region: "JP", seed: 3, color: "var(--color-neon-blue)" },
      { tag: "VOID", name: "Void Runners", region: "EU", seed: 4, color: "var(--color-neon-pink)" },
      { tag: "CRIM", name: "Crimson Ghosts", region: "BR", seed: 5, color: "var(--color-neon-red)" },
      { tag: "ROSE", name: "Rose Legion", region: "SEA", seed: 6, color: "var(--color-neon-pink)" },
      { tag: "ONYX", name: "Onyx Empire", region: "MENA", seed: 7, color: "var(--color-neon-red)" },
      { tag: "EMBR", name: "Ember Kings", region: "OCE", seed: 8, color: "var(--color-neon-pink)" },
    ],
    schedule: [
      { round: "Round of 32", a: "NWLV", b: "EMBR", status: "scheduled", time: "Nov 02 · 18:00" },
      { round: "Round of 16", a: "PHNX", b: "TBD", status: "scheduled", time: "Nov 03 · 18:00" },
      { round: "Quarterfinal", a: "TBD", b: "TBD", status: "scheduled", time: "Nov 04 · 18:00" },
      { round: "Grand Final", a: "TBD", b: "TBD", status: "scheduled", time: "Nov 05 · 20:00" },
    ],
    prizeBreakdown: [
      { place: "1st", amount: "$450,000", pct: "50%" },
      { place: "2nd", amount: "$225,000", pct: "25%" },
      { place: "3rd", amount: "$112,500", pct: "12.5%" },
      { place: "4th", amount: "$67,500", pct: "7.5%" },
      { place: "5–8th", amount: "$11,250 each", pct: "5%" },
    ],
  },
  {
    slug: "ember-rally",
    title: "Ember Rally",
    tag: "Battle Royale",
    prize: "$2.4M",
    date: "Nov 22 — 30",
    location: "São Paulo",
    status: "Coming Soon",
    color: "var(--color-neon-red)",
    blurb:
      "Twenty squads drop into São Paulo for a week of battle-royale chaos. Last team standing takes the crown.",
    teams: [
      { tag: "CRIM", name: "Crimson Ghosts", region: "BR", seed: 1, color: "var(--color-neon-red)" },
      { tag: "PHNX", name: "Phantom Squad", region: "NA", seed: 2, color: "var(--color-neon-red)" },
      { tag: "VOID", name: "Void Runners", region: "EU", seed: 3, color: "var(--color-neon-pink)" },
      { tag: "NWLV", name: "Neon Wolves", region: "KR", seed: 4, color: "var(--color-neon-blue)" },
      { tag: "ROSE", name: "Rose Legion", region: "SEA", seed: 5, color: "var(--color-neon-pink)" },
      { tag: "ONYX", name: "Onyx Empire", region: "MENA", seed: 6, color: "var(--color-neon-red)" },
      { tag: "BLUR", name: "Blue Reign", region: "JP", seed: 7, color: "var(--color-neon-blue)" },
      { tag: "EMBR", name: "Ember Kings", region: "OCE", seed: 8, color: "var(--color-neon-pink)" },
    ],
    schedule: [
      { round: "Group Stage", a: "CRIM", b: "PHNX", status: "scheduled", time: "Nov 22 · 19:00" },
      { round: "Group Stage", a: "VOID", b: "NWLV", status: "scheduled", time: "Nov 23 · 19:00" },
      { round: "Finals", a: "TBD", b: "TBD", status: "scheduled", time: "Nov 30 · 20:00" },
    ],
    prizeBreakdown: [
      { place: "1st", amount: "$1,200,000", pct: "50%" },
      { place: "2nd", amount: "$600,000", pct: "25%" },
      { place: "3rd", amount: "$300,000", pct: "12.5%" },
      { place: "4th", amount: "$180,000", pct: "7.5%" },
      { place: "5–8th", amount: "$30,000 each", pct: "5%" },
    ],
  },
  {
    slug: "frostline",
    title: "Frostline",
    tag: "RTS · 1v1",
    prize: "$600K",
    date: "Dec 08 — 12",
    location: "Reykjavík",
    status: "Coming Soon",
    color: "var(--color-neon-blue)",
    blurb:
      "Strategic minds collide under the northern lights. A pure 1v1 RTS tournament where every build order is a gamble.",
    teams: [
      { tag: "VOID", name: "Void Runners", region: "EU", seed: 1, color: "var(--color-neon-pink)" },
      { tag: "NWLV", name: "Neon Wolves", region: "KR", seed: 2, color: "var(--color-neon-blue)" },
      { tag: "PHNX", name: "Phantom Squad", region: "NA", seed: 3, color: "var(--color-neon-red)" },
      { tag: "ONYX", name: "Onyx Empire", region: "MENA", seed: 4, color: "var(--color-neon-red)" },
      { tag: "CRIM", name: "Crimson Ghosts", region: "BR", seed: 5, color: "var(--color-neon-red)" },
      { tag: "BLUR", name: "Blue Reign", region: "JP", seed: 6, color: "var(--color-neon-blue)" },
      { tag: "ROSE", name: "Rose Legion", region: "SEA", seed: 7, color: "var(--color-neon-pink)" },
      { tag: "EMBR", name: "Ember Kings", region: "OCE", seed: 8, color: "var(--color-neon-pink)" },
    ],
    schedule: [
      { round: "Quarterfinal", a: "VOID", b: "EMBR", status: "scheduled", time: "Dec 08 · 19:00" },
      { round: "Quarterfinal", a: "NWLV", b: "ROSE", status: "scheduled", time: "Dec 08 · 21:00" },
      { round: "Semifinal", a: "TBD", b: "TBD", status: "scheduled", time: "Dec 10 · 20:00" },
      { round: "Grand Final", a: "TBD", b: "TBD", status: "scheduled", time: "Dec 12 · 20:00" },
    ],
    prizeBreakdown: [
      { place: "1st", amount: "$300,000", pct: "50%" },
      { place: "2nd", amount: "$150,000", pct: "25%" },
      { place: "3rd", amount: "$75,000", pct: "12.5%" },
      { place: "4th", amount: "$45,000", pct: "7.5%" },
      { place: "5–8th", amount: "$7,500 each", pct: "5%" },
    ],
  },
];

export const getTournament = (slug: string) =>
  tournaments.find((t) => t.slug === slug);

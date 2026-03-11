export type EventItem = {
  slug: string;
  name: string;
  description: string;
  poster: string;
  registerUrl: string;
  date: string;
  venue: string;
};

export const events: EventItem[] = [
  {
    slug: "iot-inferno",
    name: "IOT Inferno",
    description: "Connect. Code. Conquer. Open for all tech enthusiasts!",
    poster: "/posters/iot-inferno.png",
    registerUrl: "https://forms.gle/iot-inferno",
    date: "March 27, 2026",
    venue: "IOT Lab",
  },
  {
    slug: "crypto-crime",
    name: "Crypto Crime 2.0",
    description: "Think like a hacker. It's all connected!!",
    poster: "/posters/crypto-crime.png",
    registerUrl: "https://forms.gle/crypto-crime",
    date: "March 27, 2026",
    venue: "ECE Gallery Hall",
  },
  {
    slug: "bot-a-thon",
    name: "Bot-A-Thon",
    description: "Conversations, Engineered. A premier hackathon for bot development.",
    poster: "/posters/bot-a-thon.jpg",
    registerUrl: "https://forms.gle/bot-athon",
    date: "March 27, 2026",
    venue: "Microsoft Lab, CSE Dept.",
  },
  {
    slug: "anime-ai-awakening",
    name: "Anime AI Awakening",
    description: "Code the hero within. Combining AI with anime creativity.",
    poster: "/posters/anime-ai.jpg",
    registerUrl: "https://forms.gle/anime-ai",
    date: "March 27 & 28, 2026",
    venue: "CTC",
  },
  {
    slug: "hashes-over-roses-3",
    name: "Hashes Over Roses 3.0",
    description: "Decode the magic. Capture the flag. CTF event with a magical twist.",
    poster: "/posters/hashes-over-roses.jpg",
    registerUrl: "https://forms.gle/hashes-over-roses",
    date: "March 27, 2026",
    venue: "IBM & Microsoft Lab, CSE",
  },
];

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}

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
    registerUrl: "https://forms.gle/94jJ95bYuuFRQUBM9",
    date: "March 27, 2026",
    venue: "IOT Lab",
  },
  {
    slug: "crypto-crime",
    name: "Crypto Crime 2.0",
    description: "Think like a hacker. It's all connected!!",
    poster: "/posters/crypto-crime.png",
    registerUrl: "https://forms.gle/T6sdBy6zD5syj3bm8",
    date: "March 27, 2026",
    venue: "ECE Gallery Hall",
  },
  {
    slug: "bot-a-thon",
    name: "Bot-A-Thon",
    description: "Conversations, Engineered. A premier hackathon for bot development.",
    poster: "/posters/bot-a-thon.jpg",
    registerUrl: "https://forms.gle/TTF1chQxLicfdtaA6",
    date: "March 27, 2026",
    venue: "Microsoft Lab, CSE Dept.",
  },
  {
    slug: "anime-ai-awakening",
    name: "Anime AI Awakening",
    description: "Code the hero within. Combining AI with anime creativity.",
    poster: "/posters/anime-ai.jpg",
    registerUrl: "https://forms.gle/1RdKcfYvCLXzPcas5",
    date: "March 27 & 28, 2026",
    venue: "CTC",
  },
  {
    slug: "hawkins-cyber-quest",
    name: "Hawkins Cyber Quest",
    description: "Track clues, crack systems, and outsmart the cyber maze.",
    poster: "/posters/hawkins-cyber-quest.png",
    registerUrl: "https://forms.gle/HRgX5CurkN8BRTD4A",
    date: "March 27, 2026",
    venue: "Cyber Security Lab, CSE",
  },
  {
    slug: "profile-forge",
    name: "Profile Forge",
    description: "Craft a standout professional profile with strategy and precision.",
    poster: "/posters/profile-forge.png",
    registerUrl: "https://forms.gle/VEzskCzC72BiDayn6",
    date: "March 28, 2026",
    venue: "Seminar Hall, CSE Dept.",
  },
  {
    slug: "hashes-over-roses-3",
    name: "Hashes Over Roses 3.0",
    description: "Decode the magic. Capture the flag. CTF event with a magical twist.",
    poster: "/posters/hashes-over-roses.jpg",
    registerUrl: "https://forms.gle/y1vVEjJAszL8Maqn9",
    date: "March 27, 2026",
    venue: "IBM & Microsoft Lab, CSE",
  },
];

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}

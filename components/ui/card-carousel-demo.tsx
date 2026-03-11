import React from "react";
import { CardCarousel } from "@/components/ui/card-carousel";

const CardCarouselDemo = () => {
  const events = [
    {
      slug: "demo-1",
      name: "IOT Inferno",
      description: "Connect. Code. Conquer.",
      poster: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
      registerUrl: "#",
      date: "March 27, 2026",
      venue: "IOT Lab",
    },
    {
      slug: "demo-2",
      name: "Crypto Crime",
      description: "Think like a hacker.",
      poster: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
      registerUrl: "#",
      date: "March 27, 2026",
      venue: "Gallery Hall",
    },
  ];

  return (
    <div className="w-full bg-slate-50 py-20">
      <CardCarousel
        events={events}
        autoplayDelay={2000}
        showPagination
        showNavigation
      />
    </div>
  );
};

export default CardCarouselDemo;

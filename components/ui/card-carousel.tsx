"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { MapPin, Calendar, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { EventItem } from "@/data/events";

interface CarouselProps {
  events: EventItem[];
  autoplayDelay?: number;
  showPagination?: boolean;
  showNavigation?: boolean;
}

type EventTheme = {
  chip: string;
  icon: string;
  button: string;
  glow: string;
  card: string;
};

const eventThemes: Record<string, EventTheme> = {
  "iot-inferno": {
    chip: "border-cyan-300/35 bg-cyan-300/10 text-cyan-100",
    icon: "text-cyan-200",
    button: "border-cyan-200/40 bg-cyan-100 text-cyan-950 hover:bg-cyan-200",
    glow: "from-cyan-400/30 via-cyan-200/10 to-transparent",
    card: "border-cyan-300/25",
  },
  "crypto-crime": {
    chip: "border-fuchsia-300/35 bg-fuchsia-300/10 text-fuchsia-100",
    icon: "text-fuchsia-200",
    button: "border-fuchsia-200/40 bg-fuchsia-100 text-fuchsia-950 hover:bg-fuchsia-200",
    glow: "from-fuchsia-400/30 via-fuchsia-200/10 to-transparent",
    card: "border-fuchsia-300/25",
  },
  "bot-a-thon": {
    chip: "border-emerald-300/35 bg-emerald-300/10 text-emerald-100",
    icon: "text-emerald-200",
    button: "border-emerald-200/40 bg-emerald-100 text-emerald-950 hover:bg-emerald-200",
    glow: "from-emerald-400/30 via-emerald-200/10 to-transparent",
    card: "border-emerald-300/25",
  },
  "anime-ai-awakening": {
    chip: "border-rose-300/35 bg-rose-300/10 text-rose-100",
    icon: "text-rose-200",
    button: "border-rose-200/40 bg-rose-100 text-rose-950 hover:bg-rose-200",
    glow: "from-rose-400/30 via-rose-200/10 to-transparent",
    card: "border-rose-300/25",
  },
  "hashes-over-roses-3": {
    chip: "border-amber-300/35 bg-amber-300/10 text-amber-100",
    icon: "text-amber-200",
    button: "border-amber-200/40 bg-amber-100 text-amber-950 hover:bg-amber-200",
    glow: "from-amber-400/30 via-amber-200/10 to-transparent",
    card: "border-amber-300/25",
  },
};

const defaultTheme: EventTheme = {
  chip: "border-white/25 bg-white/10 text-white/90",
  icon: "text-white/80",
  button: "border-white/20 bg-white text-black hover:bg-zinc-200",
  glow: "from-white/30 via-white/10 to-transparent",
  card: "border-white/20",
};

export const CardCarousel: React.FC<CarouselProps> = ({
  events,
  autoplayDelay = 3800,
  showPagination = true,
  showNavigation = true,
}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  if (!events.length) {
    return null;
  }

  const safeIndex = ((activeIndex % events.length) + events.length) % events.length;
  const activeEvent = events[safeIndex];
  const activeTheme = eventThemes[activeEvent.slug] ?? defaultTheme;
  const progress = ((safeIndex + 1) / events.length) * 100;

  return (
    <section className="relative mx-auto w-full max-w-6xl px-3 pb-6 pt-4 sm:px-4 lg:px-6">
      <style>{`
        .mindkraft-poster-swiper {
          width: 100%;
          height: 100%;
          padding-bottom: 26px;
        }

        .mindkraft-poster-swiper .swiper-slide {
          width: 100% !important;
          height: 100% !important;
        }

        .mindkraft-poster-swiper .swiper-pagination {
          bottom: 2px !important;
        }

        .mindkraft-poster-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.3);
          opacity: 0.55;
          width: 8px;
          height: 8px;
          margin: 0 5px !important;
          transition: all 0.28s ease;
        }

        .mindkraft-poster-swiper .swiper-pagination-bullet-active {
          background: #ffffff;
          opacity: 1;
          width: 20px;
          border-radius: 999px;
        }

        .mindkraft-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 30;
          width: 34px;
          height: 34px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .mindkraft-nav-btn:hover {
          transform: translateY(-50%) scale(1.07);
          background: rgba(255, 255, 255, 0.16);
        }

        .mindkraft-nav-btn.swiper-button-disabled {
          opacity: 0;
          pointer-events: none;
        }

        @media (min-width: 1024px) {
          .mindkraft-nav-btn {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>

        <div className="relative grid gap-7 lg:grid-cols-[460px_1fr] lg:gap-12">
          <div className="mx-auto w-full max-w-[360px] sm:max-w-[390px] lg:max-w-[460px]">
            <motion.div
              className={`relative aspect-[42/59.4] overflow-hidden rounded-[1.7rem] border ${activeTheme.card} bg-white/[0.1] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.5)] backdrop-blur-2xl`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[1.7rem] border border-white/20"
                animate={{ opacity: [0.4, 0.72, 0.4] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className={`pointer-events-none absolute -inset-20 bg-gradient-to-br ${activeTheme.glow}`} />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -left-[62%] top-[-10%] h-[130%] w-[38%] -skew-x-12 bg-gradient-to-r from-transparent via-white/24 to-transparent mix-blend-screen"
                animate={{ x: ["0%", "225%"] }}
                transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1.1, ease: "easeInOut" }}
              />

              <div className="relative size-full overflow-hidden rounded-[1.5rem] border border-white/18 bg-black/60">
                <Swiper
                  slidesPerView={1}
                  loop={events.length > 1}
                  autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
                  pagination={showPagination ? { clickable: true } : false}
                  navigation={
                    showNavigation
                      ? {
                          nextEl: ".mindkraft-next-btn",
                          prevEl: ".mindkraft-prev-btn",
                        }
                      : false
                  }
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mindkraft-poster-swiper"
                >
                  {events.map((event) => (
                    <SwiperSlide key={event.slug}>
                      <div className="relative size-full overflow-hidden rounded-[1.5rem] bg-black/70">
                        <Image src={event.poster} alt={event.name} fill className="object-cover" priority={safeIndex === 0} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {showNavigation && (
                <>
                  <div className="mindkraft-prev-btn mindkraft-nav-btn left-2.5 sm:left-3">
                    <ChevronLeft className="size-4 lg:size-5" />
                  </div>
                  <div className="mindkraft-next-btn mindkraft-nav-btn right-2.5 sm:right-3">
                    <ChevronRight className="size-4 lg:size-5" />
                  </div>
                </>
              )}
            </motion.div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-black/35 p-3 text-center backdrop-blur-lg">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">Secure your slot</p>
              <Link
                href={activeEvent.registerUrl}
                target="_blank"
                className={`mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 hover:scale-[1.02] sm:text-sm ${activeTheme.button}`}
              >
                Register Now
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEvent.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="space-y-4"
              >
                <div className={`rounded-2xl border ${activeTheme.card} bg-white/[0.05] p-4 backdrop-blur-xl sm:p-5`}>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${activeTheme.chip}`}>
                      Featured Event
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white/70">
                      {safeIndex + 1}/{events.length}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold uppercase tracking-[-0.02em] text-white sm:text-3xl">{activeEvent.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/76 sm:text-[15px]">{activeEvent.description}</p>

                  <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-white via-zinc-200 to-zinc-400"
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: 0.05 }}
                    className="rounded-2xl border border-white/12 bg-black/30 p-4 backdrop-blur-xl"
                  >
                    <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/55">
                      <Calendar className={`size-3.5 ${activeTheme.icon}`} />
                      Date
                    </p>
                    <p className="mt-2 text-sm font-medium text-white/90">{activeEvent.date}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: 0.1 }}
                    className="rounded-2xl border border-white/12 bg-black/30 p-4 backdrop-blur-xl"
                  >
                    <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/55">
                      <MapPin className={`size-3.5 ${activeTheme.icon}`} />
                      Venue
                    </p>
                    <p className="mt-2 text-sm font-medium text-white/90">{activeEvent.venue}</p>
                  </motion.div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
      </div>
    </section>
  );
};

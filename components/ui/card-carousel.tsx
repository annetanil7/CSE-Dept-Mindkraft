"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { MapPin, Calendar, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { EventItem } from "@/data/events";

interface CarouselProps {
  events: EventItem[];
  autoplayDelay?: number;
  showPagination?: boolean;
  showNavigation?: boolean;
}

export const CardCarousel: React.FC<CarouselProps> = ({
  events,
  autoplayDelay = 4000,
  showPagination = true,
  showNavigation = true,
}) => {
  return (
    <div className="w-full relative py-4 overflow-visible px-4">
      <style>{`
        .swiper {
          width: 100%;
          padding-top: 40px;
          padding-bottom: 60px;
          overflow: visible !important;
        }

        .swiper-slide {
          background-position: center;
          background-size: cover;
          width: clamp(280px, 35vw, 450px) !important;
          height: clamp(500px, 62vw, 800px) !important; /* 9:16 Ratio */
          transition: 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          filter: blur(14px) brightness(0.4);
          transform: scale(0.8) translateY(20px);
          border-radius: 2.5rem;
          opacity: 0.3;
        }

        .swiper-slide-active {
          filter: blur(0px) brightness(1);
          transform: scale(1) translateY(0);
          box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(59, 130, 246, 0.1);
          opacity: 1;
          z-index: 10;
        }

        .swiper-slide-prev, .swiper-slide-next {
          opacity: 0.6;
          filter: blur(6px) brightness(0.6);
          transform: scale(0.9) translateY(10px);
        }

        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.2);
          opacity: 0.5;
          width: 8px;
          height: 8px;
          margin: 0 6px !important;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: #3b82f6;
          opacity: 1;
          width: 32px;
          border-radius: 4px;
        }

        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(255,255,255,0.05);
          color: white;
        }

        .nav-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-50%) scale(1.15);
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 15px 40px rgba(0,0,0,0.5), 0 0 20px rgba(37,99,235,0.2);
        }

        .nav-btn.swiper-button-disabled {
          opacity: 0;
          pointer-events: none;
        }
      `}</style>

      <div className="relative mx-auto max-w-[1400px]">
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          loop={events.length > 2}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
          }}
          pagination={showPagination ? { clickable: true } : false}
          navigation={showNavigation ? {
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          } : false}
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {events.map((event) => (
            <SwiperSlide key={event.slug}>
              <div className="relative size-full rounded-[2.5rem] overflow-hidden group border border-white/10 bg-black flex items-center justify-center">
                {/* Poster Image */}
                <Image
                  src={event.poster}
                  alt={event.name}
                  fill
                  className="object-contain transition-opacity duration-1000"
                />

                {/* Detail Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-10 text-white">
                  <div className="space-y-5 translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] bg-blue-600/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg">
                        Featured Event
                      </span>
                    </div>

                    <h3 className="text-4xl font-black tracking-tighter leading-none italic uppercase">
                      {event.name}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-medium max-w-sm line-clamp-3">
                      {event.description}
                    </p>

                    <div className="flex flex-col gap-3 py-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/5 backdrop-blur-sm">
                          <Calendar className="size-4 text-blue-400" />
                        </div>
                        {event.date}
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/5 backdrop-blur-sm">
                          <MapPin className="size-4 text-blue-400" />
                        </div>
                        {event.venue}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link
                        href={event.registerUrl}
                        target="_blank"
                        className="group/btn inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl"
                      >
                        Secure Your Spot
                        <ArrowUpRight className="size-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Inactive state overlay - floating title */}
                <div className="absolute top-4 left-10 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  <div className="glass-card px-4 py-2 rounded-xl border-white/20">
                    <h4 className="text-white text-lg font-black tracking-tight uppercase italic drop-shadow-md">
                      {event.name}
                    </h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {showNavigation && (
          <>
            <div className="prev-btn nav-btn left-[-20px] md:left-2 flex items-center justify-center">
              <ChevronLeft className="size-6 text-white" />
            </div>
            <div className="next-btn nav-btn right-[-20px] md:right-2 flex items-center justify-center">
              <ChevronRight className="size-6 text-white" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

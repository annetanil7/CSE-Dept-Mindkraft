import { CardCarousel } from "@/components/ui/card-carousel";
import { events } from "@/data/events";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function EventsPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden">
      <BackgroundBeams className="opacity-40" />
      <ModeToggle />

      <section className="relative z-10 w-full max-w-[100vw] py-12 md:py-20">
        <div className="mx-auto w-full">
          <CardCarousel
            events={events}
            autoplayDelay={4000}
            showPagination
            showNavigation
          />
        </div>
      </section>

      {/* Subtle branding and hint */}
      <div className="relative z-10 pb-12 text-center">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">
          Swipe to Explore • Mindkraft 2026
        </p>
      </div>
    </main>
  );
}

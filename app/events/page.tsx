import { CardCarousel } from "@/components/ui/card-carousel";
import { events } from "@/data/events";
import { EventBackground } from "@/components/ui/event-background";
import { BrandingHeader } from "@/components/ui/branding-header";

export default function EventsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <EventBackground />
      <BrandingHeader />

      <section className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-16 pt-28 md:px-8 md:pt-36">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/48">Mindkraft 2026</p>
            <h1 className="mt-3 text-base font-medium leading-8 text-white/86 md:text-lg">
              The Department of Computer Science and Engineering proudly hosts exciting events as part of Mindkraft, hosted by Karunya University
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
              Featuring seven dynamic competitions, these events are designed to inspire innovation, challenge technical skills, and bring together passionate problem-solvers ready to compete for exciting prizes and rewards.
            </p>
          </div>
        </div>

        <div className="relative w-full">
          <CardCarousel
            events={events}
            autoplayDelay={4000}
            showPagination
            showNavigation
          />
        </div>

      </section>
    </main>
  );
}

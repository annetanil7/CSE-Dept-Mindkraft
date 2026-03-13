import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, MapPin, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getEventBySlug, events } from "@/data/events";
import { EventBackground } from "@/components/ui/event-background";

export async function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

interface EventDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-4 py-10 md:px-6">
      <EventBackground />
      <div className="relative z-10 mx-auto max-w-6xl">
        <Link href="/events" className="glass-chip inline-flex items-center rounded-full px-4 py-2 text-sm text-white/72 hover:text-white">
          <ArrowLeft className="mr-2 size-4" /> Back to events
        </Link>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-panel-strong surface-outline relative overflow-hidden rounded-[2rem] p-4 md:p-5">
            <div className="noise-overlay" />
            <div className="relative h-[420px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/60 md:h-[720px]">
              <Image
                src={event.poster}
                alt={event.name}
                width={1200}
                height={1600}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <div className="glass-panel-strong surface-outline relative overflow-hidden rounded-[2rem] p-6 md:p-8">
            <div className="noise-overlay" />
            <div className="relative z-10">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/46">Featured Event</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                {event.name}
              </h1>
              <p className="mt-5 text-base leading-8 text-white/64">{event.description}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="glass-chip rounded-2xl p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/42">Date</p>
                  <p className="mt-3 flex items-center text-sm text-white/78">
                    <CalendarDays className="mr-3 size-4 text-white/58" />
                    {event.date}
                  </p>
                </div>
                <div className="glass-chip rounded-2xl p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/42">Venue</p>
                  <p className="mt-3 flex items-center text-sm text-white/78">
                    <MapPin className="mr-3 size-4 text-white/58" />
                    {event.venue}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="h-12 rounded-full bg-white px-7 text-black hover:bg-zinc-200">
                  <a href={event.registerUrl} target="_blank" rel="noreferrer">
                    Register for this event <MoveRight className="ml-2 size-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, MapPin, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getEventBySlug } from "@/data/events";

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
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <Link href="/events" className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900">
          <ArrowLeft className="mr-2 size-4" /> Back to events
        </Link>

        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <Image
            src={event.poster}
            alt={event.name}
            width={1200}
            height={700}
            className="h-[380px] w-full object-cover"
          />

          <div className="p-6 md:p-8">
            <h1 className="text-3xl font-bold tracking-tight">{event.name}</h1>
            <p className="text-slate-600 mt-3">{event.description}</p>

            <div className="mt-5 space-y-2 text-sm text-slate-700">
              <p className="flex items-center">
                <CalendarDays className="mr-2 size-4" /> {event.date}
              </p>
              <p className="flex items-center">
                <MapPin className="mr-2 size-4" /> {event.venue}
              </p>
            </div>

            <div className="mt-6">
              <Button asChild size="lg">
                <a href={event.registerUrl} target="_blank" rel="noreferrer">
                  Register for this event <MoveRight className="ml-2 size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

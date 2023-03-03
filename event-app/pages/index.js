import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getFeaturedEvents } from "@/data/dummy-data";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

import PageTemplate from "@/components/pageTemplate";
import Database from "@/db/db";
import { TEvent } from "@/db/events";
import Link from "next/link";
import { useState, useEffect } from 'react';

function EventsPageItem(props: { item: TEvent }) {
  return <>
    <span className="pb-3 text-dark fs-5" >
      {props.item.title}
    </span>
    <span className="pb-3">
      {props.item.content}
    </span>
  </>
}

export default function EventsPage() {
  const [allEvents, setAllEvents] = useState<TEvent[] | null>(null);

  useEffect(() => {
    const fetchedEvents: TEvent[] = Database.getEvents();
    setAllEvents(fetchedEvents);
  }, [])
  return (
    <PageTemplate>
      <div className="col-12 col-md-4 d-flex flex-column">
        <span className="mt-1 text-dark fw-bold fs-3" >Events</span>
        {
          allEvents?.map(eventItem => {
            return <>
              <span className="mt-3 fs-5" ><Link className="text-dark" href={"#" + eventItem.id}>{eventItem.title}</Link></span>
            </>
          })
        }
      </div>
      <div className="col-12 col-md-8 mt-5 pb-5 mt-md-3 d-flex flex-column">
        {
          allEvents?.map(eventItem => {
            return <>
              <EventsPageItem item={eventItem} />
            </>
          })
        }
      </div>
    </PageTemplate>
  )
}

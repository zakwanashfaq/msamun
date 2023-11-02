import PageTemplate from "@/components/pageTemplate";
import { TPrayers } from "@/db/prayers";
import { useState, useEffect } from 'react';
import Database from "@/db/db";
import NavPanel, { OffCanvasNavPanel } from "@/components/navpanel";

export function EventsPageItem(props: { item: TPrayers }) {
  const eventDate = new Date(props.item.eventDate).toLocaleString();
  return <div className="d-flex flex-column pb-5" id={props.item.id}>
    <div className="row">
      <div className="col-md-6">
        <div className="pb-1 text-dark fs-5" >
          {props.item.title}
        </div>
        <div className="pb-2 text-dark" >
          {props.item.subtitle}
        </div>
      </div>
    </div>
    <span className="pb-3">
      {props.item.content}
    </span>
    <div className="col-12">
        <div className="w-100 d-flex justify-content-start justify-content-md-end">
          <strong className="pe-2 pb-2">Last updated:</strong> {eventDate}
        </div>
      </div>
  </div>
}

export default function ExecutivesPage() {
  const [prayerObjItems, setPrayerObjItem] = useState<TPrayers[] | null>(null);

  useEffect(() => {
    const fetchedEvents: TPrayers[] = Database.getPrayers();
    setPrayerObjItem(fetchedEvents);
  }, [])

  return (
    <PageTemplate>
      <div className="col-12 ">
        <OffCanvasNavPanel menuItems={prayerObjItems} mainTitle={"Prayers"}/>
      </div>
      <div className="col-12 col-md-4 d-none d-md-block">
        <NavPanel menuItems={prayerObjItems} mainTitle={"Prayers"}/>
      </div>
      <div className="col-12 col-md-8 mt-5 px-4 px-md-5 pb-5 mt-md-3 d-flex flex-column">
        {
          prayerObjItems?.map(eventItem => {
            return <>
              <EventsPageItem item={eventItem} />
            </>
          })
        }
      </div>
    </PageTemplate>
  )
}

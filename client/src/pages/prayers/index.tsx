import PageTemplate from "@/components/pageTemplate";
import { TPrayers } from "@/db/prayers";
import { useState, useEffect } from 'react';
import Database from "@/db/db";
import NavPanel, { OffCanvasNavPanel } from "@/components/navpanel";

function getMonthName(monthNumber: number) : string {
  if (monthNumber < 1 || monthNumber > 12) {
    return "Invalid Month";
  }

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return months[monthNumber - 1];
}

export function PrayerPageItem(props: { item: TPrayers }) {
  const eventDate1 = new Date(props.item.eventDate);
  let eventDate =  getMonthName(eventDate1.getMonth()) + " " + eventDate1.getDay() + ", " + eventDate1.getFullYear();
  return <div className="d-flex flex-column pb-5" id={props.item.id} key={props.item.id}>
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
    <pre className="pb-3">
      {props.item.content}
    </pre>
    <div className="col-12">
        <div className="w-100 d-flex justify-content-start justify-content-md-end">
          <strong className="pe-2 pb-2">Last updated:</strong> {eventDate}
        </div>
      </div>
  </div>
}

export default function PrayerPage() {
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
              <PrayerPageItem item={eventItem} />
            </>
          })
        }
      </div>
    </PageTemplate>
  )
}

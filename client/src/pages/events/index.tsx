import NavPanel, { OffCanvasNavPanel } from "@/components/navpanel";
import PageTemplate from "@/components/pageTemplate";
import Database from "@/db/db";
import { TEvent } from "@/db/events";
import Link from "next/link";
import cheerio from 'cheerio';
import { useState, useEffect } from 'react';

function EventsPageItem(props: { item: TEvent }) {
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
      <div className="col-md-6">
        <div className="w-100 d-flex justify-content-start justify-content-md-end">
          <strong className="pe-2 pb-2">Event Date:</strong> {eventDate}
        </div>
      </div>

    </div>
    <span className="pb-3">
      {props.item.content}
    </span>
  </div>
}

type TiframeDataExtractorReturnType = {
  src: string,
  height: string,
  width: string
}

const iframeDataExtractor = (iframeString: string): TiframeDataExtractorReturnType => {

  const abd = cheerio.load(iframeString);
  const iframeElement = abd('iframe');

  let src, height, width;
  if (iframeElement) {
    // Extract src, height, and width attributes
    src = iframeElement.attr('src');
    height = iframeElement.attr('height');
    width = iframeElement.attr('width');

  } else {
    console.log('No iframe element found in the provided string.');
  }

  return {
    src: src || "",
    height: height || "",
    width: width || ""
  }
}

function EventFacebookIframe(props: { iframeString: string }) {
  const iFrameDataObj = iframeDataExtractor(props.iframeString);
  return (
    <>
      <div className="p-1">
        <iframe
          className=""
          height={iFrameDataObj.height}
          src={iFrameDataObj.src}
          width={iFrameDataObj.width}
        ></iframe>
      </div>
    </>
  );
}

export default function EventsPage() {
  //const [allEvents, setAllEvents] = useState<TEvent[] | null>(null);
  const [allFacebookEvents, setAllFacebookEvents] = useState<string[] | null>(null);

  useEffect(() => {
    const fetchedEvents = Database.getEventsIframes();
    setAllFacebookEvents(fetchedEvents);
  }, [])
  return (
    <PageTemplate>
      {/** Old Navigation Code system */}
      {/* <div className="col-12 ">
        <OffCanvasNavPanel menuItems={allEvents} mainTitle={"Events"}/>
      </div>
      <div className="col-12 col-md-4 d-none d-md-block">
        <NavPanel menuItems={allEvents} mainTitle={"Events"}/>
      </div>
      <div className="col-12 col-md-8 mt-5 px-4 px-md-5 pb-5 mt-md-3 d-flex flex-column">
        {
          allEvents?.map(eventItem => {
            return <>
              <EventsPageItem item={eventItem} />
            </>
          })
        }
      </div> */}
      {/** Old Navigation Code system end*/}

      <div className="row d-flex justify-content-center ">
        <div className="col-12 col-xl-6">
          {
            allFacebookEvents?.map((fbEventItem, index) => {
              const isOdd = index % 2 === 0;
              if (!isOdd) {
                return;
              }
              return (
                <EventFacebookIframe key={fbEventItem} iframeString={fbEventItem} />
                
              );
            })
          }
        </div>
        <div className="col-12 col-xl-6">
        {
            allFacebookEvents?.map((fbEventItem, index) => {
              const isOdd = index % 2 === 0;
              if (isOdd) {
                return;
              }
              return (
                <EventFacebookIframe key={fbEventItem} iframeString={fbEventItem} />
              );
            })
          }
        </div>
      </div>
    </PageTemplate>
  )
}

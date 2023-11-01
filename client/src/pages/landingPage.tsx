import { Footer } from '@/components/footer';
import Hero from '@/components/hero';
import { Navbar } from '@/components/navbar';
import Database from '@/db/db';
import { TEvent } from '@/db/events';
import { TFeatured } from '@/db/featured';
import { LandingPageData } from '@/enums/texts/landingPageData';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type TLandingPageFeaturedContentProps = {
  items: TFeatured[] | null
}

function LandingPageFeaturedContent(props: TLandingPageFeaturedContentProps) {
  let mainFeature: TFeatured | null;
  let otherFeature: TFeatured[] = [];
  props.items?.forEach(item => {
    if (item.position == 1) {
      mainFeature = item;
    } else {
      otherFeature.push(item)
    }
  })
  return (
    <>
      <div className="container px-4">
        <div className="row row-cols-1 row-cols-md-1 align-items-sm-start align-items-lg-center g-5 pb-3">
          <div className="col d-flex flex-column align-items-start gap-2">
            {/**@ts-ignore */}
            <h2 className="fw-bold text-body-emphasis">{mainFeature?.title}</h2>
            {/**@ts-ignore */}
            <p className="text-body-secondary">{mainFeature?.content}</p>
            {/* <a href="#" className="btn btn-secondary btn-md">View full post</a> */}
          </div>
          <div className="row px-4">
            {otherFeature.sort((a, b) => a.position - b.position).map(items => {
              return <>
              <div className="g-4 col-12 col-md-6">
                <div className="col d-flex flex-column gap-2 py-3">
                  {/* <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-secondary bg-gradient fs-4 rounded-3">
                    <svg className="bi" width="5em" height="7em">
                      <use ></use>
                    </svg>
                  </div> */}
                  <h4 className="fw-semibold mb-0 text-body-emphasis">{items.title}</h4>
                  <p className="text-body-secondary">{items.content}</p>
                  {/* <a href="#" className="btn btn-secondary btn-sm">View full post</a> */}
                </div>
                </div>
              </>
            })}
          </div>
        </div>
      </div>
    </>
  );
}

function DonateSection() {
  return (
    <>
      <div className='container-lg'>
        <div className="px-4 py-5 mb-0 my-5 text-center">
          <div className='pb-4 fw-bold text-success-emphasis'>
            {LandingPageData.DONATION_DESCRIPTION_TEXT}
          </div>
          <button className=" btn text-light bg-success p-md-3" >
            {LandingPageData.LARGE_DONATION_BUTTON_TEXT}
          </button>
        </div>
      </div>
    </>
  );
}

type TUpcomingEventsProps = {
  items: TEvent[] | null
}

export function UpcomingEvents(props: TUpcomingEventsProps) {
  return (
    <>
      <div className="list-group list-group-checkable d-grid gap-2 border-0">
        {props.items?.map(item => {
          return <>
            <label className="list-group-item rounded-3 py-3" >
              <Link className='text-dark' href={"/events#" + item.id}>{item.title}</Link> 
              <span className="d-block small opacity-50">{item.subtitle}</span>
            </label>
          </>
        })}
      </div>
    </>
  );
}

export default function Home() {
  const [upcomingEvents, setUpcomingEvents] = useState<TEvent[] | null>(null);
  const [featuredPosts, setFeaturedPosts] = useState<TFeatured[] | null>(null);

  useEffect(() => {
    const fetchedUpcomingEvents = Database.getUpcomingEvents(["dy3u4tr3847yf3ugf837gfwojehd2iufr", "fjg34o8t834gfo34gf873giuhf82792y9", "xthv53xtxqq8lj525h1t696a4oostr6j", "dy3u4tr3847yf3ugf837gfwojehd2iufr2"]);
    setUpcomingEvents(fetchedUpcomingEvents);

    const featuredPosts = Database.getFeatured();
    setFeaturedPosts(featuredPosts);
  }, [])


  return (
    <div className="container-fluid p-0 m-0">
      <div className="container-fluid px-0 mx-0">
        <Navbar />
        <Hero />
      </div>
      <div className="container-lg">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-4 px-4">
            <div className="fs-4 py-3">
              {LandingPageData.LEFT_COLUMN_HEADING_TEXT}
            </div>
            <UpcomingEvents items={upcomingEvents} />
          </div>
          <div className="col-12 col-md-8">
            <div className="fs-4 px-4 py-3 mt-5 mt-md-0">
              {LandingPageData.RIGHT_COLUMN_HEADING_TEXT}
            </div>
            <LandingPageFeaturedContent items={featuredPosts} />
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 mx-0 text-light bg-success-subtle">
        <DonateSection />
      </div>
      <div className="container-fluid px-0 mx-0 bg-dark text-light">
        <Footer />
      </div>
    </div>
  )
}

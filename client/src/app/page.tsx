import { Footer } from '@/components/footer';
import Hero from '@/components/hero';
import { ListGroup } from '@/components/listGroup';
import { Navbar } from '@/components/navbar';
import { LandingPageData } from '@/enums/texts/landingPageData';
import Script from 'next/script';

function LandingPageFeaturedContent() {
  return (
    <>
      <div className="container px-4  pb-5">
        <div className="row row-cols-1 row-cols-md-1 align-items-sm-start align-items-lg-center g-5 pb-5">
          <div className="col d-flex flex-column align-items-start gap-2">
            <h2 className="fw-bold text-body-emphasis">Left-aligned title explaining these awesome features</h2>
            <p className="text-body-secondary">Paragraph of text beneath the heading to explain the heading. We&apos;ll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="#" className="btn btn-secondary btn-md">View full post</a>
          </div>
          <div className="row px-4">
            <div className="g-4 col-12 col-md-6">
              <div className="col d-flex flex-column gap-2 py-3">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-secondary bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="5em" height="7em">
                    <use ></use>
                  </svg>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
                <p className="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
                <a href="#" className="btn btn-secondary btn-sm">View full post</a>
              </div>
              <div className="col d-flex flex-column gap-2 py-3">
                {/* <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-secondary bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use ></use>
                  </svg>
                </div> */}
                <h4 className="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
                <p className="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
                <a href="#" className="btn btn-secondary btn-sm">View full post</a>
              </div>
            </div>
            <div className="col-12 col-md-6 g-4">
              <div className="col d-flex flex-column gap-2 py-3">
                {/* <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-secondary bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use></use>
                  </svg>
                </div> */}
                <h4 className="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
                <p className="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
                <a href="#" className="btn btn-secondary btn-sm">View full post</a>
              </div>
              <div className="col d-flex flex-column gap-2 py-3">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-secondary bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="5em" height="7em">
                    <use></use>
                  </svg>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
                <p className="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
                <a href="#" className="btn btn-secondary btn-sm">View full post</a>
              </div>
            </div>
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

export default function Home() {
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
            <ListGroup />
          </div>
          <div className="col-12 col-md-8">
            <div className="fs-4 px-4 py-3 mt-5 mt-md-0">
              {LandingPageData.RIGHT_COLUMN_HEADING_TEXT}
            </div>
            <LandingPageFeaturedContent />
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

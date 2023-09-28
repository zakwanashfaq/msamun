import PageTemplate from "@/components/pageTemplate";


export default function ExecutivesPage() {
  return (
    <PageTemplate>
      <div className="col-12 col-md-4 d-flex flex-column">
        <span className="mt-1 text-dark fw-bold fs-3" >FAQ&apos;s</span>
        <span className="mt-3 text-dark fs-5" >Current Events</span>
        <span className="mt-3 text-dark fs-5" >Past Events</span>
      </div>
      <div className="col-12 col-md-8 mt-5 mt-md-3 d-flex flex-column">
        <span className="pb-3 text-dark fs-5" >
          {"We are currently working on updating this page. Sorry for the inconvinience :("}
        </span>
      </div>
    </PageTemplate>
  )
}

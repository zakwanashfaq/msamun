import PageTemplate from "@/components/pageTemplate";


export default function ExecutivesPage() {
  return (
    <PageTemplate>
      <div className="d-flex flex-column justify-content-center align-items-start">
        <div className="pb-5">
          <div className="card-body">
            <h5 className="card-title fw-bold pb-3">Office Location</h5>
            <p className="mb-0">University Center (UC) 6004</p>
            <p className="mb-0">Memorial University</p>
          </div>
        </div>
        <div className="pb-5">
          <div className="card-body">
            <h5 className="card-title fw-bold pb-3">Contact Information</h5>
            <p className="mb-0">Facebook Group: <a className="fw-bold" href="https://www.facebook.com/groups/7510890852" target="_blank">https://www.facebook.com/groups/7510890852</a></p>
            <p className="mb-0">Email: <a className="fw-bold">msapresident@mun.ca</a></p>
            <p className="mb-0">Email(secondary): <a className="fw-bold">msamun786@gmail.com</a></p>
          </div>
        </div>
        <div className="pb-5">
          <div className="card-body">
            <h5 className="card-title fw-bold pb-3">Community updates</h5>
            <p className="mb-0">We have a facebook-messenger group for quick updates, like changes to jumma prayer, Eid events etc. </p>
            <p className="mb-0">Please ask an executive, email or reach us out through our facebook group page to be added to the chat.</p>
          </div>
        </div>
      </div>
    </PageTemplate >
  )
}

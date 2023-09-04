import { NavLink } from "@/enums/navLinks";

export function Footer() {
    return (
        <>
            <div className="container-lg">
                <footer className="pt-5">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            <h5>MSA-MUN</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href={NavLink.Home} className="nav-link text-light p-0 ">Home</a></li>
                                <li className="nav-item mb-2"><a href={NavLink.Events} className="nav-link text-light p-0">Events</a></li>
                                <li className="nav-item mb-2"><a href={NavLink.Prayers} className="nav-link text-light p-0">Prayers</a></li>
                                <li className="nav-item mb-2"><a href={NavLink.Executives} className="nav-link text-light p-0">Executives</a></li>
                                <li className="nav-item mb-2"><a href={NavLink.Contacts} className="nav-link text-light p-0">Contacts</a></li>
                                <li className="nav-item mb-2"><a href={NavLink.FAQs} className="nav-link text-light p-0">FAQs</a></li>
                            </ul>
                        </div>
                        <div className="col-md-5 offset-md-1 mb-3 ms-auto">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                    <button className="btn btn-light" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 mt-4 border-top">
                        <p>© 2023 Muslim Students Association of Memorial Unniversity of Newfoundland</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
                            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
                            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    );
}
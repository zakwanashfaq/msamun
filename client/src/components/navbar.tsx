import { LandingPageData } from "@/enums/texts/landingPageData";
import { NavLink } from "@/enums/navLinks";
import Link from "next/link";
import { DonateButton } from "./donateButton";

export function Navbar(props: any) {
    return (
        <>
            <nav className="py-2 bg-body-tertiary border-bottom">
                <div className="container d-flex flex-wrap">
                    <ul className="nav ms-auto">
                        <li className="nav-item"><a href={NavLink.Home} className="nav-link link-body-emphasis px-3 active" aria-current="page">Home</a></li>
                        <li className="nav-item"><a href={NavLink.Events} className="nav-link link-body-emphasis px-3">Events</a></li>
                        <li className="nav-item"><a href={NavLink.Prayers} className="nav-link link-body-emphasis px-3">Prayers</a></li>
                        <li className="nav-item"><a href={NavLink.Executives} className="nav-link link-body-emphasis px-3">Executives</a></li>
                        <li className="nav-item"><a href={NavLink.Contacts} className="nav-link link-body-emphasis px-3">Contacts</a></li>
                        {/* <li className="nav-item"><a href={NavLink.FAQs} className="nav-link link-body-emphasis ps-3 pe-0">FAQs</a></li> */}
                    </ul>

                </div>
            </nav>
            <header className="py-3 px-3 mb-4 border-bottom">
                <div className="container d-flex flex-wrap justify-content-center">
                    <Link href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-auto link-body-emphasis text-decoration-none">
                        {/* <svg className="bi me-2" width="40" height="32"><use href="#bootstrap"></use></svg> */}
                        <span className="fs-4 fw-bold bg-gradient m-0 py-1 px-3 animate-bg">MSA-MUN</span>
                    </Link>
                    <div className=" mb-3 mb-lg-0 d-flex justify-content-center">
                        <DonateButton buttonLabel={LandingPageData.DONATION_BUTTON_TEXT} />
                    </div>
                </div>
            </header>
        </>
    );
}
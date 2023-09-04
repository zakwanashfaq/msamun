import { LandingPageData } from "@/enums/texts/landingPageData";

export default function Hero() {
    return (
        <>
            <div className="px-4 py-5 pb-1 my-5 text-center">
                {/* <img className="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
                <h1 className="display-1 fw-bold text-light-emphasis">{LandingPageData.HERO_TEXT_ARABIC}</h1>
                <h1 className="display-5 fw-bold text-light-emphasis">{LandingPageData.HERO_TEXT_ENGLISH}</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-1">{LandingPageData.HERO_TEXT_SUB_HEADING_L1}</p>
                    <p className="lead mb-4">{LandingPageData.HERO_TEXT_SUB_HEADING_L2}</p>
                </div>
                <div className="mx-auto">
                    <button className="btn bg-dark-subtle p-md-3" >{LandingPageData.HERO_BUTTON_TEXT}</button>
                </div>
                <br />
            </div>
        </>
    );
}
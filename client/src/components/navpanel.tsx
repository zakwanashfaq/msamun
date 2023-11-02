import { TEvent } from "@/db/events";
import Link from "next/link";
import { useState } from "react";

type TNavPanelProps = {
    menuItems: TEvent[] | null,
    mainTitle: String
}

export function OffCanvasNavPanel(props: TNavPanelProps) {
    const [showNavBar, setShowNavBar] = useState<boolean>(false);
    const toggleNavPanel = () => {
        setShowNavBar(!showNavBar);
    }
    return (
        <>
            <a className="d-md-none px-3" onClick={toggleNavPanel} href="#navPanel" role="button" aria-controls="navPanel">
                Content Overview
            </a>
            <div className={"offcanvas offcanvas-start " + (showNavBar? "show": "")} id="navPanel" aria-labelledby="navPanel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">{props.mainTitle}</h5>
                    <button type="button" className="btn-close" onClick={toggleNavPanel} aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="d-flex flex-column">
                        {
                            props.menuItems?.map(eventItem => {
                                return <>
                                    <span className="mt-3 fs-5" key={eventItem.id} ><Link className="text-dark" key={eventItem.id} href={"#" + eventItem.id}>{eventItem.title}</Link></span>
                                </>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export function NavPanel(props: TNavPanelProps) {
    return (
        <>
            <div className="d-flex flex-column">
                <span className="mt-1 text-dark fw-bold fs-3" >{props.mainTitle}</span>
                {
                    props.menuItems?.map(eventItem => {
                        return <>
                            <span className="mt-3 fs-5" key={eventItem.id} ><Link className="text-dark" href={"#" + eventItem.id}>{eventItem.title}</Link></span>
                        </>
                    })
                }
            </div>
        </>
    );
}

export default NavPanel;
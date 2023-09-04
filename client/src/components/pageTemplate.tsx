import { Footer } from "./footer";
import { Navbar } from "./navbar";

export default function PageTemplate(props: any) {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <div className="container-lg flex-grow-1">
                <div className="row">
                    {props.children}
                </div>
            </div>
            <div className="container-fluid px-0 mx-0 bg-dark text-light">
                <Footer />
            </div>
        </div>
    );
}

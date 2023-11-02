
type TDonateButtonProps = {
    buttonLabel: String,
}

export function DonateButton(props: TDonateButtonProps) {
    return (
        <>
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#donationModal">{props.buttonLabel}</button>
            <div className="modal fade" id="donationModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Donations</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Please interac your donations to <a className="fw-bolder">msapresident@mun.ca</a>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
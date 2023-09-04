
export function ListGroup() {
    return (
        <>
            <div className="list-group list-group-checkable d-grid gap-2 border-0">
                <label className="list-group-item rounded-3 py-3" >
                    First radio
                    <span className="d-block small opacity-50">With support text underneath to add more detail</span>
                </label>

                <label className="list-group-item rounded-3 py-3" >
                    Second radio
                    <span className="d-block small opacity-50">Some other text goes here</span>
                </label>

                <label className="list-group-item rounded-3 py-3">
                    Third radio
                    <span className="d-block small opacity-50">And we end with another snippet of text</span>
                </label>

                <label className="list-group-item rounded-3 py-3" >
                    Fourth disabled radio
                    <span className="d-block small opacity-50">This option is disabled</span>
                </label>
            </div>
        </>
    );
}
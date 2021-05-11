export const ApkCard = () => {
    return (
        <div className="card h-100">
            <div className="card-header">
                APK
            </div>
            <div className="card-body overflow-auto">
                <div className="list-group list-group-flush">
                    <button className="btn list-group-item list-group-item-action list-group-item-primary d-flex justify-content-between align-items-start">
                        <i className="bi bi-archive-fill mt-3 me-2"/>
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Cras justo odio
                        </div>
                        <span className="badge bg-success rounded-pill mt-3 p-2 ">
                            <i className="bi bi-check-lg"/>
                        </span>
                    </button>
                    <li className="btn list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                        <i className="bi bi-archive mt-3 me-2"/>
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Cras justo odio
                        </div>
                        <span className="badge bg-warning rounded-pill mt-3 p-2 ">
                            <i className="bi bi-three-dots"/>
                        </span>
                    </li>
                    <li className="btn list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                        <i className="bi bi-archive mt-3 me-2"/>
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Cras justo odio
                        </div>
                        <span className="badge bg-success rounded-pill mt-3 p-2 ">
                            <i className="bi bi-check-lg"/>
                        </span>
                    </li>
                    <li className="btn list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                        <i className="bi bi-archive mt-3 me-2"/>
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Cras justo odio
                        </div>
                        <span className="badge bg-danger rounded-pill mt-3 p-2 ">
                            <i className="bi bi-x-lg"/>
                        </span>
                    </li>
                </div>
            </div>
        </div>
    );
}

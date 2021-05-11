import { ApkItem } from "./apk_item";

export const ApkList = ({ apks }) => {
    return (
        <div className="list-group list-group-flush">
            <button
                className="btn list-group-item list-group-item-action list-group-item-primary d-flex justify-content-between align-items-start">
                <i className="bi bi-archive-fill mt-3 me-2"/>
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                </div>
                <div className="badge bg-success rounded-pill mt-3 p-2 ">
                    <i className="bi bi-check-lg"/>
                </div>
            </button>
            <button
                className="btn list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                <i className="bi bi-archive mt-3 me-2"/>
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                </div>
                <div className="badge bg-warning rounded-pill mt-3 p-2 ">
                            <i className="bi bi-three-dots"/>
                        </div>
            </button>
            <button
                className="btn list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                <i className="bi bi-archive mt-3 me-2"/>
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                </div>
                <div className="badge bg-success rounded-pill mt-3 p-2 ">
                            <i className="bi bi-check-lg"/>
                        </div>
            </button>
            <button
                className="btn list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                <i className="bi bi-archive mt-3 me-2"/>
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                </div>
                <div className="badge bg-danger rounded-pill mt-3 p-2 ">
                            <i className="bi bi-x-lg"/>
                        </div>
            </button>
        </div>
    );
}

export const ApkItem = ({ apk }) => {

    const name = apk.name;
    const date = apk.date;

    return (
        <button
            className="btn list-group-item list-group-item-action list-group-item-primary d-flex justify-content-between align-items-start">
            <i className="bi bi-archive-fill mt-3 me-2"/>
            <div className="ms-2 me-auto">
                <div className="fw-bold">{{ name }}</div>
                {{date}}
            </div>
            <div className="badge bg-success rounded-pill mt-3 p-2">
                <i className="bi bi-check-lg"/>
            </div>
        </button>
    );
}

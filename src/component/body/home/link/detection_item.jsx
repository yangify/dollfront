export const DetectionItem = ({ link, path }) => {
    return (
        <button className="btn list-group-item list-group-item-action">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{ link }</div>
                <div className="fw-light">{ path }</div>
            </div>
        </button>
    );
}

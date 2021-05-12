export const LinkItem = ({ link }) => {
    return (
        <button className="btn list-group-item list-group-item-action d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{ link.link }</div>
                <div className="fw-light">{ link.path }</div>
            </div>
        </button>
    );
}

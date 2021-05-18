export const LinkItem = ({ link }) => {
    return (
        <button className="btn list-group-item list-group-item-action">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{ link.link }</div>
                <div className="fw-light">{ link.path }</div>
            </div>
        </button>
    );
}

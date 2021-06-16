import { connect } from "react-redux";

const DetectionGroupTab = ({ query, active }) => {

    const navLink = "nav-link";
    const navLinkActive = "nav-link active";

    return (
        <li className="nav-item" role="presentation">
            <button className={active ? navLinkActive : navLink} data-bs-toggle="tab" data-bs-target={"#" + query.title}
                    type="button" role="tab" aria-controls="home" aria-selected="true">{query.title}
            </button>
        </li>
    );
}

const mapStateToProps = state => ({
    ...state,
});

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(DetectionGroupTab)

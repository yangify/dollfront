import { connect } from "react-redux";
import { changePage } from "../../redux/dispatcher/page_dispatcher";

const SubHeader = ({ page }) => {
    return (
        <nav className="px-4 py-2 bg-light text-dark rounded shadow">
            <div className="container-fluid d-flex justify-content-between text-center">
                <div className="h4 text-dark mt-2">{ page.display }</div>
                <button type="button" className="px-3 btn btn-warning shadow-none"
                        data-bs-toggle="collapse" data-bs-target="#configurationForm">Add</button>
            </div>
        </nav>
    );
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = { changePage }

export default connect(mapStateToProps, mapDispatchToProps)(SubHeader)

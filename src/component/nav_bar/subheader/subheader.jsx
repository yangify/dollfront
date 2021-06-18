import { connect } from "react-redux";

import * as Pages from "../../../pages";

const SubHeader = ({ page }) => {
    return (
        <nav className="px-4 py-2 bg-light text-dark rounded shadow">
            <div className="container-fluid d-flex justify-content-between text-center">
                <div className="h5 text-dark mt-2">{ page.display }</div>
                {
                    page.name === Pages.CONFIGURATION.name ?
                        <button type="button" className="px-3 btn btn-warning shadow-none"
                                data-bs-toggle="collapse" data-bs-target="#configurationForm">Add Group</button> :
                        <></>
                }
            </div>
        </nav>
    );
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SubHeader)

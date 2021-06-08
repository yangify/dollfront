import { connect } from "react-redux";

import { deleteConfiguration } from "../../../redux/dispatcher/configuration_dispatcher";

const ConfigurationCard = ({ configuration, deleteConfiguration }) => {

    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{configuration.title}</h5>
                    <p className="card-text">{configuration.query}</p>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-sm btn-danger"
                            onClick={() => deleteConfiguration(configuration)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = { deleteConfiguration }

export default connect(mapStateToProps, mapDispatchToProps)(ConfigurationCard)

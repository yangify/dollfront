import { connect } from "react-redux";

const ConfigurationCard = ({ configuration }) => {
    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{configuration.title}</h5>
                    <p className="card-text">{configuration.query}</p>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ConfigurationCard)

import { connect } from "react-redux";

const ConfigurationItem = ({key, configuration}) => {
    return (
        <div key={key} className="list-group-item">
            <h5 className="card-title">{configuration.title}</h5>
            <p className="card-text">{configuration.query}</p>
        </div>
    );
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(ConfigurationItem)

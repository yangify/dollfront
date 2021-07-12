import { connect } from "react-redux";

const DetectionCardHeader = ({group, selected}) => {

    return (
        <div className="card-header d-flex justify-content-between align-items-center">
            <span>{group.groupName} - {selected.name}</span>
            <button type="button" className="btn"><i className="bi bi-filter" /></button>
        </div>
    );
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = {  }

export default connect(mapStateToProps, mapDispatchToProps)(DetectionCardHeader)

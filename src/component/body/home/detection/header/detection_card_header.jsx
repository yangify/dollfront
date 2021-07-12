import { connect } from "react-redux";
import { toggleFilter } from "../../../../../redux/dispatcher/detection_dispatcher";

const DetectionCardHeader = ({ group, selected, toggleFilter, index}) => {

    return (
        <div className="card-header d-flex justify-content-between align-items-center">
            <span>{group.groupName} - {selected.name}</span>
            <button type="button" className="btn btn-outline-dark" onClick={() => toggleFilter(index)}>
                <i className="bi bi-filter"  />
            </button>
        </div>
    );
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = { toggleFilter }

export default connect(mapStateToProps, mapDispatchToProps)(DetectionCardHeader)

import { connect } from "react-redux";

import { toggleFilterCheckbox } from "../../../../../redux/dispatcher/detection_dispatcher";

const DetectionFilter = ({index, showFilter, shouldFilter, toggleFilterCheckbox}) => {
    return (
        <>
            {
                showFilter[index] ?
                    <div className="form-check mx-4 mt-4">
                        <input className="form-check-input checked" type="checkbox" value="" id="flexCheckChecked"
                               checked={shouldFilter[index]} onChange={() => toggleFilterCheckbox(index)}/>
                        <label className="form-check-label" htmlFor="flexCheckChecked">Android links</label>
                    </div>:
                    <></>
            }
        </>
    );
}

const mapStateToProps = state => ({
    ...state,
    showFilter: state.detectionGroups.showFilter,
    shouldFilter: state.detectionGroups.shouldFilter
});

const mapDispatchToProps = { toggleFilterCheckbox }

export default connect(mapStateToProps, mapDispatchToProps)(DetectionFilter)

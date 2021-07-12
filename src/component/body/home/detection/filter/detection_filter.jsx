import { connect } from "react-redux";
import {useState} from "react";

const DetectionFilter = ({index, showFilter}) => {

    const displayFilter = showFilter[index];

    const [filters, setState] = useState({ android: {isChecked: true}});

    const onChange = key => {
        filters[key].isChecked = !filters[key].isChecked;
        setState({...filters});
    };

    return (
        <>
            {
                displayFilter ?
                    <div className="form-check mx-4 mt-4">
                        <input className="form-check-input checked" type="checkbox" value="" id="flexCheckChecked"
                               checked={filters['android'].isChecked} onChange={() => onChange('android')}/>
                        <label className="form-check-label" htmlFor="flexCheckChecked">Android links</label>
                    </div>:
                    <></>
            }
        </>
    );
}

const mapStateToProps = state => ({
    ...state,
    showFilter: state.detectionGroups.showFilter
});

const mapDispatchToProps = {  }

export default connect(mapStateToProps, mapDispatchToProps)(DetectionFilter)

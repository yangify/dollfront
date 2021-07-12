import { connect } from "react-redux";

const DetectionFilter = ({index, showFilter}) => {

    const displayFilter = showFilter[index];

    return (
        <>
            {
                displayFilter ?
                    <div className="form-check mx-4 mt-4">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Android links
                        </label>
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

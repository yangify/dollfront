import { connect } from "react-redux";

const DetectionFilter = () => {

    return (
        <div className="form-check mx-4 mt-4">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
            <label className="form-check-label" htmlFor="flexCheckChecked">
                Android links
            </label>
        </div>
    );
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = {  }

export default connect(mapStateToProps, mapDispatchToProps)(DetectionFilter)

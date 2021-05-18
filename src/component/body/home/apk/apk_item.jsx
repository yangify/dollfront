import { connect } from "react-redux";
import { selectApk } from "../../../../redux/dispatcher/apk_dispatcher";

const ApkItem = ({ apk, selected, selectApk }) => {

    const buttonClass = "btn list-group-item list-group-item-action d-flex justify-content-between align-items-start";
    const isSelected = selected.name === apk.name;

    return (
        <button className={!isSelected ? buttonClass : buttonClass + " list-group-item-primary"} onClick={() => selectApk(apk)}>
            <i className="bi bi-archive-fill mt-3 me-2"/>
            <div className="ms-2 me-auto">
                <div className="fw-bold">{ apk.name }</div>
                <div className="fw-normal">{ apk.date }</div>
            </div>
            <div className="badge bg-success rounded-pill mt-3 p-2">
                <i className="bi bi-check-lg"/>
            </div>

            {/*<div className="badge bg-warning rounded-pill mt-3 p-2 ">*/}
            {/*    <i className="bi bi-three-dots"/>*/}
            {/*</div>*/}

            {/*<div className="badge bg-danger rounded-pill mt-3 p-2 ">*/}
            {/*    <i className="bi bi-x-lg"/>*/}
            {/*</div>*/}
        </button>
    );
}


const mapStateToProps = state => ({
    ...state,
    selected: state.apks.selected
});

const mapDispatchToProps = {selectApk}

export default connect(mapStateToProps, mapDispatchToProps)(ApkItem)

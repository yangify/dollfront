import { connect } from "react-redux";
import { deleteApk, selectApk } from "../../../../redux/dispatcher/apk_dispatcher";

const ApkItem = ({ apk, selected, deleteApk, selectApk }) => {

    const dormant = "btn list-group-item list-group-item-action d-flex justify-content-between align-items-center";
    const active = dormant + " list-group-item-secondary";
    const isSelected = selected.name === apk.name;

    const select = () => selectApk(apk);
    const onClick = () => deleteApk(apk);

    return (
        <button className={isSelected ? active : dormant} onClick={select}>
            <div className="w-75">
                <div className="fw-bold">{ apk.name }</div>
                <div className="fw-normal">{ apk.date }</div>
            </div>
            <div>
                <a href={ `${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_DOWNLOAD_ENDPOINT}/${apk.name}` } download
                   className="ms-3 btn btn-sm btn-outline-primary rounded-pill">
                    <i className="bi bi-download"/>
                </a>
                <div onClick={onClick} className="ms-3 btn btn-sm btn-outline-danger rounded-pill">
                    <i className="bi bi-x"/>
                </div>
            </div>
            {/*<div className="badge bg-success rounded-pill mt-3 p-2">*/}
            {/*    <i className="bi bi-check-lg"/>*/}
            {/*</div>*/}

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

const mapDispatchToProps = { deleteApk, selectApk }

export default connect(mapStateToProps, mapDispatchToProps)(ApkItem)

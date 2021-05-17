import { useEffect } from "react";
import { connect } from 'react-redux';
import { ApkList } from "./apk_list";
import { getApk } from "../../../../redux/dispatcher/apk_dispatcher";

const ApkCard = (props) => {

    useEffect( () => {
        props.getApk();
    // eslint-disable-next-line
    }, [])

    return (
        <div className="card h-100">
            <div className="card-header">
                APK
            </div>
            <div className="card-body overflow-auto">
                { props.list.length === 0 ?
                    <img src='nothingness.gif' alt='Nothing to see here' /> :
                    <ApkList apks={props.list} selected={props.selected}/>
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    ...state,
    list: state.apk.list,
    selected: state.apk.selected
});

const mapDispatchToProps = {getApk}

export default connect(mapStateToProps, mapDispatchToProps)(ApkCard)

import { useEffect } from "react";
import { connect } from 'react-redux';
import { ApkList } from "./apk_list";
import { getApk } from "../../../../redux/dispatcher/apk_dispatcher";

const ApkCard = ({ list, getApk }) => {

    // eslint-disable-next-line
    useEffect( () => { getApk() }, [])

    return (
        <div className="card">
            <div className="card-header">APK</div>
            <div className="card-body overflow-auto">
                { list.length === 0 ?
                    <img src='nothingness.gif' alt='Nothing to see here' /> :
                    <ApkList apks={list} />
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    ...state,
    list: state.apks.list
});

const mapDispatchToProps = {getApk}

export default connect(mapStateToProps, mapDispatchToProps)(ApkCard)

import { useEffect } from "react";
import { connect } from 'react-redux';

import { getApk } from "../../../../redux/dispatcher/apk_dispatcher";
import { ApkList } from "./apk_list";

const ApkCard = ({ list, getApk }) => {

    useEffect( () => { getApk() }, [getApk])

    return (
        <div className="card">
            <div className="card-header">APK</div>
            <div className="card-body overflow-auto">
                { list.length === 0 ?
                    <p>no apk uploaded</p> :
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

import { useEffect } from "react";
import { connect } from "react-redux";

import ApkCard from "./apk/apk_card";
import DetectionCard from "./link/detection_card";
import { HOME } from "../../../pages";
import { setPage } from "../../../redux/dispatcher/page_dispatcher";


export const Home = ({ setPage }) => {

    useEffect(() => { setPage(HOME) }, [setPage])

    return (
        <div className="row">
            <div className="col-xl-4 mb-4" style={{ maxHeight: "80vh" }}><ApkCard/></div>
            <div className="col-xl-8 mb-4" style={{ maxHeight: "80vh" }}><DetectionCard/></div>
        </div>
    );
}


const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = { setPage }

export default connect(mapStateToProps, mapDispatchToProps)(Home)

import { useEffect } from "react";
import { connect } from "react-redux";

import { getDetections } from "../../../../redux/dispatcher/detection_dispatcher";
import { DetectionList } from "./detection_list";

const DetectionCard = ({ detections, selected, getDetections }) => {

    useEffect(() => { getDetections(selected.name) }, [getDetections, selected])

    return (
        <div className="card h-100">
            <div className="card-header">Link - {selected.name}</div>
            <div className="card-body overflow-auto">
                <DetectionList detections={detections} />
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    ...state,
    selected: state.apks.selected,
});

const mapDispatchToProps = { getDetections }

export default connect(mapStateToProps, mapDispatchToProps)(DetectionCard)

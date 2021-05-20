import { useEffect } from "react";
import { connect } from "react-redux";

import { DetectionNav } from "./detection_nav";
import { DetectionTab } from "./detection_tab";
import { getDetections } from "../../../../redux/dispatcher/detection_dispatcher";

const DetectionCard = ({ detections, selected, getLink }) => {

    // eslint-disable-next-line
    useEffect(() => { getLink(selected.name) }, [selected])

    let tools = detections.map(link => { return link['decompiler']})

    return (
        <div className="card h-100">
            <div className="card-header">Link</div>
            <div className="card-body overflow-auto">
                <DetectionNav tools={ tools }/>
                <DetectionTab tabs={ detections }/>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    ...state,
    selected: state.apks.selected,
});

const mapDispatchToProps = { getLink: getDetections }

export default connect(mapStateToProps, mapDispatchToProps)(DetectionCard)

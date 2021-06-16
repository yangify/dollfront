import { useEffect } from "react";
import { connect } from "react-redux";

import { getDetections } from "../../../../redux/dispatcher/detection_dispatcher";
import { DetectionGroup } from "./detection_group";

const DetectionCard = ({ detections, selected, getDetections }) => {

    useEffect(() => { getDetections(selected.name) }, [getDetections, selected])

    return (
        <>
            {
                detections.data.map((group, index) => (
                    <div key={index} className="card h-100">
                        <div className="card-header">{group.groupName} - {selected.name}</div>
                        <DetectionGroup group={group} />
                    </div>
                ))
            }
        </>
    );
}

const mapStateToProps = state => ({
    ...state,
    selected: state.apks.selected,
});

const mapDispatchToProps = { getDetections }

export default connect(mapStateToProps, mapDispatchToProps)(DetectionCard)

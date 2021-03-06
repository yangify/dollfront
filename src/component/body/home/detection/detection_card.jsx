import { useEffect } from "react";
import { connect } from "react-redux";

import DetectionGroupTabs from "./tab/detection_group_tabs";
import DetectionGroupContent from "./content/detection_group_content";
import { getDetections } from "../../../../redux/dispatcher/detection_dispatcher";

const DetectionCard = ({ detectionGroups, selected, getDetections }) => {

    useEffect(() => { getDetections(selected.name); }, [getDetections, selected])

    return (
        <>
            {
                detectionGroups.data.map((group, index) => (
                    <div key={index} className="card h-100 mb-4">
                        <div className="card-header">{group.groupName} - {selected.name}</div>
                        <DetectionGroupTabs group={group.data} />
                        <DetectionGroupContent group={group} />
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

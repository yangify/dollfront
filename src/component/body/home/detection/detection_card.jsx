import { useEffect } from "react";
import { connect } from "react-redux";

import DetectionGroupTabs from "./tab/detection_group_tabs";
import DetectionGroupContent from "./content/detection_group_content";
import { getDetections, toggleLoadingState } from "../../../../redux/dispatcher/detection_dispatcher";

const DetectionCard = ({ detectionGroups, selected, getDetections, toggleLoadingState }) => {

    useEffect(() => {
        toggleLoadingState(true);
        getDetections(selected.name);
        toggleLoadingState(false);
    }, [getDetections, selected, toggleLoadingState])

    if (detectionGroups.isLoading) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }

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

const mapDispatchToProps = { getDetections, toggleLoadingState }

export default connect(mapStateToProps, mapDispatchToProps)(DetectionCard)

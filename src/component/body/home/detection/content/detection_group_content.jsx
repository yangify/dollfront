import { connect } from "react-redux";

import DetectionList from "./detection_list";

const DetectionGroupContent = (props) => {

    const filter = detections => {
        if (props.shouldFilter[props.index]) {
            const links = ["http://schemas.android.com/apk/res/android"];   //TODO: get this list from somewhere
            return {...detections, data : detections.data.filter(detection => !links.includes(detection.link))};
        }
        return detections
    }

    return (
        <div className="card-body overflow-auto">
            <div className="tab-content">
                {
                    props.group.data.map((detections, index) => (
                        <DetectionList key={index} detectionList={filter(detections)} active={index === 0}/>
                    ))
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    ...state,
    shouldFilter: state.detectionGroups.shouldFilter
});

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(DetectionGroupContent)

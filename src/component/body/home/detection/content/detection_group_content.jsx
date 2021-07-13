import { connect } from "react-redux";

import DetectionList from "./detection_list";

const DetectionGroupContent = ({ group }) => {

    const shouldFilter = false;  //TODO: get boolean from filter component

    const filter = detections => {
        if (shouldFilter) {
            const links = ["http://schemas.android.com/apk/res/android"];   //TODO: get this list
            return {...detections, data : detections.data.filter(detection => !links.includes(detection.link))};
        }
        return detections
    }

    return (
        <div className="card-body overflow-auto">
            <div className="tab-content">
                {
                    group.data.map((detections, index) => (
                        <DetectionList key={index} detectionList={filter(detections)} active={index === 0}/>
                    ))
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(DetectionGroupContent)

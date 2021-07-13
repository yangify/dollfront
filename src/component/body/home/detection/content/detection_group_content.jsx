import { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import DetectionList from "./detection_list";

const DetectionGroupContent = (props) => {

    const [links, setLinks] = useState([]);

    useEffect(() => {
        const url = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_ANDROID_LINKS_ENDPOINT;
        axios.get(url).then(response => setLinks(response.data.android))
    }, [setLinks])

    const filter = detections => {
        if (!props.shouldFilter[props.index]) return detections;

        let data = detections.data;
        for (const link of links) {
            data = data.filter(detection => detection.link.indexOf(link) === -1);
        }
        return {...detections, data : data};
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

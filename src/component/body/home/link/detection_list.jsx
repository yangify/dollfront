import { DetectionItem } from "./detection_item";

export const DetectionList = ({ detections }) => {

    let key = 0;
    return (
        <ul className="list-group list-group-flush">
            {
                detections.map(detection => (
                    detection['links'].map(link => (
                        <DetectionItem key={key++} link={link} path={detection.path} />
                    ))
                ))
            }
        </ul>
    );
}

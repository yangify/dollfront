import { DetectionItem } from "./detection_item";

export const DetectionList = ({ detections }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                detections.map((detection, index) => (
                    <DetectionItem key={index} link={detection.link} path={detection.file.path} />
                    )
                )
            }
        </ul>
    );
}

import { DetectionList } from "./detection_list";

export const DetectionGroup = ({ group }) => {
    return (
        <>
            {
                group.data.map((detections, index) => (
                    <div key={index} className="card-body overflow-auto">
                        <DetectionList detections={detections} />
                    </div>
                ))
            }
        </>
    );
}

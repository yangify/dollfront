import { DetectionItem } from "./detection_item";

export const DetectionList = ({ links }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                links.map((link, index) => (
                    <DetectionItem key={index} link={link} />
                ))
            }
        </ul>
    );
}

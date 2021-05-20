import { DetectionItem } from "./detection_item";

export const DetectionList = ({ links }) => {

    let key = 0;
    return (
        <ul className="list-group list-group-flush">
            {
                links.map(object => (
                    object['links'].map(link => (
                        <DetectionItem key={key++} link={link} path={object['path']}/>
                    ))
                ))
            }
        </ul>
    );
}

import { DetectionList } from "./detection_list";

export const DetectionContent = ({ content }) => {

    const dormant = "tab-pane fade p-2";
    const active = dormant + " show active";

    return (
        <div className="tab-content" id="nav-tabContent">
            {
                content.map((links, index) => (
                    <div className={ index === 0 ? active : dormant } key={index} id={links['decompiler']} role="tabpanel">
                        <DetectionList links={links['detections']}/>
                    </div>
                ))
            }
        </div>
    );
}

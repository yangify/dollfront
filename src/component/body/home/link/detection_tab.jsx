import { DetectionList } from "./detection_list";

export const DetectionTab = ({ tabs }) => {
    const dormant = "tab-pane fade p-2";
    const active = dormant + " show active";

    return (
        <div className="tab-content" id="nav-tabContent">
            {
                tabs.map((detection, index) => (
                    <div key={detection['decompiler']} id={detection['decompiler']} role="tabpanel"
                         className={ index === 0 ? active : dormant } >
                        <DetectionList detections={detection['detections']}/>
                    </div>
                ))
            }
        </div>
    );
}

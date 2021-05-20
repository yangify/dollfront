import { DetectionList } from "./detection_list";

export const DetectionContent = ({ content }) => {

    const dormant = "tab-pane fade p-2";
    const active = dormant + " show active";

    return (
        <div className="tab-content" id="nav-tabContent">
            {
                Object.keys(content).map((tool, index) => (
                    <div className={ index === 0 ? active : dormant } key={index} id={tool} role="tabpanel">
                        <DetectionList links={content[tool]}/>
                    </div>
                ))
            }
        </div>
    );
}

import { LinkList } from "./link_list";

export const LinkContent = ({ content }) => {

    const dormant = "tab-pane fade p-2";
    const active = dormant + " show active";

    return (
        <div className="tab-content" id="nav-tabContent">
            {
                Object.keys(content).map((tool, index) => (
                    <div className={ index === 0 ? active : dormant } key={index} id={tool} role="tabpanel">
                        <LinkList links={content[tool]}/>
                    </div>
                ))
            }
        </div>
    );
}

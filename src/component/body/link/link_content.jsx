import { LinkList } from "./link_list";

export const LinkContent = ({ content }) => {
    return (
        <div className="tab-content" id="nav-tabContent">
            {
                Object.keys(content).map((tool, index) => (
                    <div className={ "tab-pane fade p-2 " + (index === 0 ? 'show active' : '') }
                         key={index} id={tool} role="tabpanel">
                        <LinkList />
                    </div>
                ))
            }
        </div>
    );
}

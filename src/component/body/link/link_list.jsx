import { LinkItem } from "./link_item";

export const LinkList = ({ links }) => {
    return (
        <div className="list-group list-group-flush">
            { links.map((link, index) => (
                <LinkItem key={index} />
            ))}
        </div>
    );
}

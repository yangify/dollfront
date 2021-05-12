import { LinkItem } from "./link_item";

export const LinkList = ({ links }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                links.map((link, index) => (
                    <LinkItem key={index} link={link} />
                ))
            }
        </ul>
    );
}

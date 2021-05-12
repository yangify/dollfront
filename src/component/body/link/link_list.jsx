import { LinkItem } from "./link_item";

export const LinkList = ({ links }) => {
    return (

        <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
        </ul>
        // <div className="list-group list-group-flush">
        //     { links.map((link, index) => (
        //         <LinkItem key={index} />
        //     ))}
        // </div>
    );
}

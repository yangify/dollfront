import { useEffect, useState } from "react";
import { LinkNav } from "./link_nav";
import { LinkContent } from "./link_content";
import { getApk } from "../../../../redux/dispatcher/apk_dispatcher";
import { connect } from "react-redux";

const LinkCard = (props) => {

    const [links, setLinks] = useState()

    useEffect(() => {
        const getLinks = async () => {
            const result = await fetch(`http://localhost:5000/api/link?filename=${props.selected.name}`);
            const data = await result.json();
            setLinks(data);
        }
        getLinks();
        // eslint-disable-next-line
    }, [props.selected])

    return (
        <div className="card h-100">
            <div className="card-header">Link</div>
            <div className="card-body overflow-auto">
                <LinkNav tools={ links === undefined || links === null ? [] : Object.keys(links) }/>
                <LinkContent content={ links === undefined || links === null ? {} : links }/>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    ...state,
    selected: state.apk.selected
});

const mapDispatchToProps = {getApk}

export default connect(mapStateToProps, mapDispatchToProps)(LinkCard)

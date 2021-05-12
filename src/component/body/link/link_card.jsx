import { useEffect, useState } from "react";
import { LinkNav } from "./link_nav";
import { LinkContent } from "./link_content";

export const LinkCard = () => {

    const [links, setLinks] = useState()

    useEffect(() => {
        const getLinks = async () => {
            const result = await fetch('http://localhost:5000/api/link?filename=Weather_forecast_v71_apkpure.com.apk');
            const data = await result.json();
            setLinks(data);
        }
        getLinks();
    }, [])

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

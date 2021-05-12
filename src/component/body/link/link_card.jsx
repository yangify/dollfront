import { useEffect, useState } from "react";
import { LinkTab } from "./link_tab";

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
            <div className="card-header">
                Link
            </div>
            <div className="card-body overflow-auto">
                <LinkTab tools={ links === undefined || links === null ? [] : Object.keys(links) }/>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active p-2" id="nav-home" role="tabpanel">
                        This is some placeholder content the Contact tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                    </div>

                    <div className="tab-pane fade" id="nav-profile" role="tabpanel">...
                    </div>
                </div>
            </div>
        </div>
    );
}

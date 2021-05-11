import {ApkCard} from "./apk_card";
import {LinkPanel} from "./link_panel";

export const Body = () => {
    return (
        <div className="container-fluid px-4 py-2 h-75">
            <div className="row g-4 h-100" >
                <div className="col-lg-4 h-100" >
                    <ApkCard />
                </div>
                <div className="col-lg-8">
                    <LinkPanel />
                </div>
            </div>
        </div>
    );
}

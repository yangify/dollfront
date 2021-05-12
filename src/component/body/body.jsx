import { ApkCard } from "./apk/apk_card";
import { LinkPanel } from "./link/link_panel";

export const Body = () => {
    return (
        <div className="container-fluid p-4 h-75">
            <div className="row h-100" >
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

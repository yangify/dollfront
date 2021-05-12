import { ApkCard } from "./apk/apk_card";
import { LinkCard } from "./link/link_card";

export const Body = () => {
    return (
        <div className="container-fluid h-75 p-4">
            <div className="row h-100" >
                <div className="col-xl-5 h-100 mb-4" >
                    <ApkCard />
                </div>
                <div className="col-xl-7 h-100 mb-4">
                    <LinkCard />
                </div>
            </div>
        </div>
    );
}

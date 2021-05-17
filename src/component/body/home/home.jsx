import { ApkCard } from "./apk/apk_card";
import { LinkCard } from "./link/link_card";
import { UploadCard } from "./upload/upload_card";

export const Home = () => {
    return (
        <div className="h-100">
            <div className="row">
                <div className="col h-100 mb-4" >
                    <UploadCard />
                </div>
            </div>
            <div className="row h-75" >
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

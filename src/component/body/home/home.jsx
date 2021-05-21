import ApkCard from "./apk/apk_card";
import DetectionCard from "./link/detection_card";

export const Home = () => {
    return (
        <div className="row">
            <div className="col-xl-4 mb-4" style={{ maxHeight: "80vh" }}><ApkCard/></div>
            <div className="col-xl-8 mb-4" style={{ maxHeight: "80vh" }}><DetectionCard/></div>
        </div>
    );
}

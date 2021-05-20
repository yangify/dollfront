import { combineReducers } from "redux";
import { ApkReducer } from './apk_reducer';
import { DetectionReducer } from "./detection_reducer";

export default combineReducers({
   apks: ApkReducer,
   detections: DetectionReducer
});

import { combineReducers } from "redux";
import { ApkReducer } from './apk_reducer';
import { DetectionReducer } from './detection_reducer';
import { PageReducer } from './page_reducer';
import { ConfigurationReducer } from "./configuration_reducer";

export default combineReducers({
   apks: ApkReducer,
   detectionGroups: DetectionReducer,
   page: PageReducer,
   configurations: ConfigurationReducer
});

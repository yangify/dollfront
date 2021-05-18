import { combineReducers } from "redux";
import { ApkReducer } from './apk_reducer';
import { LinkReducer } from "./link_reducer";

export default combineReducers({
   apks: ApkReducer,
   links: LinkReducer
});

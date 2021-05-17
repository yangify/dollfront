import { combineReducers } from "redux";
import { apkReducer } from './apk_reducer';

export default combineReducers({
   apk: apkReducer
});

import * as action from "../action/apk_action";

export const getApk = () => async dispatch => {
    dispatch(await action.getApk());
}

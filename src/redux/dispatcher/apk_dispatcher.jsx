import * as apkAction from "../action/apk_action";

export const getApk = () => async dispatch => {
    const action = await apkAction.getApk();
    dispatch(action);
};

export const deleteApk = apk => async dispatch => {
    const action = await apkAction.deleteApk(apk);
    dispatch(action);
}

export const selectApk = apk => dispatch => {
    const action = apkAction.selectApk(apk);
    dispatch(action);
};

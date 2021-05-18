import * as linkAction from "../action/link_action";

export const getLink = filename => async dispatch => {
    const action = await linkAction.getLink(filename);
    dispatch(action);
};

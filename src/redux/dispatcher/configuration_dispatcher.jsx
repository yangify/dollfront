import * as ConfigurationAction from "../action/configuration_action";

export const getConfiguration = () => async dispatch => {
    const action = await ConfigurationAction.getConfiguration();
    dispatch(action);
}

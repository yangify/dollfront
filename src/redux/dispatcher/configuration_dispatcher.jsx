import * as ConfigurationAction from "../action/configuration_action";

export const getConfiguration = () => async dispatch => {
    const action = await ConfigurationAction.getConfiguration();
    dispatch(action);
}

export const deleteConfiguration = configuration => async dispatch => {
    const action = await ConfigurationAction.deleteConfiguration(configuration);
    dispatch(action);
}

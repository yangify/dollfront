import * as Type from '../action/types';

export const ConfigurationReducer = (state=[], action) => {
    switch (action.type) {
        case Type.GET_CONFIGURATION:
            return action.payload;

        case Type.DELETE_CONFIGURATION:
            const configurationId = action.payload._id;
            return state.filter(configuration => configuration._id !== configurationId);

        default:
            return state;
    }
};

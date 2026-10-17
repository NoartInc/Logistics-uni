import { 
    CREATE_HELPER,
    UPDATE_HELPER,
    RETRIEVE_HELPER,
    DELETE_HELPER,
    DELETE_ALL_HELPER
} from '../actions/types' ;

const initialState = {
    list: [],
    selectedData: null
}

function helperReducer(helpers = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_HELPER:
            return {
                ...helpers,
                list: [...helpers.list, payload]
            }

        case RETRIEVE_HELPER:
            return {
                ...helpers,
                list: payload.helpers
            }

        case UPDATE_HELPER:
            const updateList = helpers.list.map((helper) => {
                if (helper.id === payload.id) {
                    return {
                        ...helper,
                        ...payload,
                    }
                } else {
                    return helper;
                }
            });
            return { 
                ...helpers,
                list: updateList
            }

        case DELETE_HELPER:
            const deletedItem = helpers.list.filter(({ id }) => id !== payload.id);
            return {
                ...helpers,
                list: deletedItem
            }
            
        case DELETE_ALL_HELPER:
            return {
                list: [],
                selectedData: null
            }

        default:
            return helpers;
    }
}

export default helperReducer;

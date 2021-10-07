import { ADD_LIST, EDIT_LIST, REMOVE_LIST } from "./ListsActions"

export const listsReducers = (state, action) => {

    switch (action.type) {
        case ADD_LIST:
            return [...state, action.payload];
        case EDIT_LIST:
            return state.map(list => {
                if (list.id === action.payload.id) {

                    return {
                        ...action.payload,
                        created: list.created
                    }
                }
                else
                    return list
            });
        case REMOVE_LIST:
            return state.filter(list => list.id !== action.payload.id);
        default:
            return state;
    }
}
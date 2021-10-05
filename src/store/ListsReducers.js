import { ADD_LIST, EDIT_LIST, REMOVE_LIST } from "./ListsActions"

export const listsReducers = (state, action) => {
    switch (action.type) {
        case ADD_LIST: {
            console.log(ADD_LIST)
            return;
        }
        case EDIT_LIST: {
            console.log(EDIT_LIST)
            return;
        }
        case REMOVE_LIST: {
            console.log(REMOVE_LIST)
            return;
        }
        default:
            return state;
    }
}
import { v4 as uuidv4 } from 'uuid';

export const ADD_LIST = 'addList'
export const EDIT_LIST = 'editList'
export const REMOVE_LIST = 'removeList'

export const addList = ({ tasks, title }) => ({
    type: ADD_LIST,
    payload: {
        listId: uuidv4(),
        title,
        tasks,
    }
})
export const removeList = ({ listId }) => ({
    type: REMOVE_LIST,
    payload: {
        listId
    }
})
export const editList = ({ listId, tasks, title }) => ({
    type: EDIT_LIST,
    payload: {
        title,
        tasks,
        listId
    }
})
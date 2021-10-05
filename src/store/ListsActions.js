import { v4 as uuidv4 } from 'uuid';

export const ADD_LIST = 'addList'
export const EDIT_LIST = 'editList'
export const REMOVE_LIST = 'removeList'

export const addList = ({ tasks, title }) => ({
    type: ADD_LIST,
    payload: {
        id: uuidv4(),
        title,
        tasks,
    }
})
export const removeList = ({ id }) => ({
    type: REMOVE_LIST,
    payload: {
        id
    }
})
export const editList = ({ id, tasks, title }) => ({
    type: EDIT_LIST,
    payload: {
        title,
        tasks,
        id
    }
})
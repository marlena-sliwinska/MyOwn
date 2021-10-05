import React, { useContext, useState } from 'react'
import { StoreContext } from '../../../store/StoreProvider'
import { addList } from '../../../store/ListsActions'
function ListForm() {
    const { lists, dispatch } = useContext(StoreContext)
    const [title, setTitle] = useState("")
    const handleTitleChange = e => setTitle(e.target.value)
    const handleAddNewNote = e => {
        e.preventDefault()
        const newList = {
            title,
            tasks: [
            ]
        }
        dispatch(addList(newList))

    }
    return (
        <form onSubmit={handleAddNewNote}>
            <label> Tytuł notatki
                <input value={title} onChange={handleTitleChange} />
            </label>
            <button>add list</button>
        </form>
    )
}

export default ListForm

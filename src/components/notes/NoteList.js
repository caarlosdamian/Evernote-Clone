import React from 'react'
import Note from './Note'
import '../../styles/noteList.css'
const NoteList = ({notes}) => {
    console.log(notes)
    return (
        <div className="notelist">
            {notes && notes.map(note=><Note note={note} key={note.id}/>)}
        </div>
    )
}

export default NoteList

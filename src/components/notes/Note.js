import React from "react";
import "../../styles/note.css";
import { useDispatch } from "react-redux";
import { deleteNote, toggleFavorite } from "../../store/actions/noteAction";
const Note = ({ note }) => {
  const dispatch = useDispatch();
  const deleteNoteHander = () => {
    dispatch(deleteNote(note));
  };
  const togglefavoriteHandler = () => {
    dispatch(toggleFavorite(note));
  };
  const heartMarkup = note.favorite ? "favorite" : "favorite_border";
  return (
    <div className="note white">
      <div className="right-align">
        <i className="material-icons red-text" onClick={togglefavoriteHandler}>
          {heartMarkup}
        </i>
        <i className="material-icons" onClick={deleteNoteHander}>
          delete
        </i>
      </div>
      <h5 className="black-text">{note.title}</h5>
      <p className="truncate">{note.content}</p>
      <p className="grey-text">2 days ago</p>
      <div className="right-align">
        <i className="material-icons black-text">edit</i>
      </div>
    </div>
  );
};

export default Note;

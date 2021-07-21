import React from "react";
import "../../styles/note.css";
import moment from "moment";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteNote, toggleFavorite } from "../../store/actions/noteAction";
const Note = ({ note }) => {
  const dispatch = useDispatch();
  const deleteNoteHander = () => {
    dispatch(deleteNote(note));
  };
  const togglefavoriteHandler = () => {
    dispatch(toggleFavorite(note));
  };
  const editNodeHandler = () => {
    dispatch({ type: "EDIT_NOTE", payload: note });
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
      <Link to={`/note/${note.id}`}>
        <h5 className="black-text">{note.title}</h5>
      </Link>
      <p className="truncate">{note.content}</p>
      <p className="grey-text">{moment(note.createdAt.toDate()).fromNow()}</p>
      <div className="right-align">
        <Link to={`/edit/${note.id}`}>
          <i className="material-icons black-text" onClick={editNodeHandler}>
            edit
          </i>
        </Link>
      </div>
    </div>
  );
};

export default Note;

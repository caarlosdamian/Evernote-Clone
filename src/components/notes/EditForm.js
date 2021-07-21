import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../hooks/useInput";
import { updateNote } from "../../store/actions/noteAction";
import { useHistory } from "react-router";

const EditForm = () => {
  const history = useHistory();
  const note = useSelector((state) => state.note);
  console.log(`EditarNota ${note}`);
  const [title, bindTitle, resetTitle] = useInput(note.title);
  const [content, bindContent, resetContent] = useInput(note.content);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, content });
    dispatch(updateNote({ id: note.id, title, content }));
    resetTitle();
    resetContent();
    history.push("/");
  };

  return (
    <div className="section">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">New Note</h5>
        <div className="input-field ">
          <input
            id="first_name2"
            type="text"
            className="validate"
            {...bindTitle}
          />
          <label className="active" htmlFor="first_name2">
            Note Title
          </label>
        </div>
        <div className="input-field">
          <textarea
            id="note_content"
            className="materialize-textarea"
            {...bindContent}
          ></textarea>
          <label htmlFor="note_content" className="active">Note Content </label>
        </div>
        <button className="btn green">Update</button>
      </form>
    </div>
  );
};

export default EditForm;

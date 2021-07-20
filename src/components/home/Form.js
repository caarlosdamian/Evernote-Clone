import React from "react";
import useInput from "../../hooks/useInput";
import "../../styles/form.css";
import { addNote } from "../../store/actions/noteAction";
import { useDispatch } from "react-redux";
const Form = () => {
  const [title, bindTitle, resetTitle] = useInput();
  const [content, bindContent, resetContent] = useInput();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, content });
    dispatch(addNote({ title, content }));
    resetTitle();
    resetContent();
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
          <label htmlFor="note_content">Note Content </label>
        </div>
        <button className="btn green">Add</button>
      </form>
    </div>
  );
};

export default Form;

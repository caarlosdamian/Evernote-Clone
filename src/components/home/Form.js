import React from "react";
import useInput from "../../hooks/useInput";
const Form = () => {
  const [title, bindTitle, resetTitle] = useInput();
  const [content, bindContent, resetContent] = useInput();
  const handleSubmit = (e) => {
    e.preventDefault;
    console.log({ title, content });
    resetTitle();
    resetContent();
  };

  return (
    <div className="section">
      <form action="">
        <h5 className="grey-text">New Note</h5>
        <div className="input-field ">
          <input id="first_name2" type="text" className="validate" {...bindTitle} />
          <label className="active" for="first_name2">
            Note Title
          </label>
        </div>
        <div className="input-field">
          <textarea id="note_content" className="materialize-textarea" {...bindContent}></textarea>
          <label for="note_content">Note Content </label>
        </div>
        <button className="btn green">Add</button>
      </form>
    </div>
  );
};

export default Form;

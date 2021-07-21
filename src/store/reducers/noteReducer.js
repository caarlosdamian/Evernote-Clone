const initialState = {
  note_toedit: {},
};

const nodeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "EDIT_NOTE":
      return payload;

    default:
      return state;
  }
};

export default nodeReducer;

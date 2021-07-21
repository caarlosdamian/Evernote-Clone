import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import nodeReducer from './noteReducer'
const rootReducer = combineReducers({
  note:nodeReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});
export default rootReducer;

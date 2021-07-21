import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Favorites from "./components/notes/Favorites";
import Home from "./components/home/Home";
import NoteDetail from "./components/notes/NoteDetail";
import EditForm from "./components/notes/EditForm";

function App() {
  return (
    <Router className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/fav" component={Favorites} />
        <Route exact path="/note/:id" component={NoteDetail} />
        <Route exact path="/edit/:id" component={EditForm} />
      </Switch>
    </Router>
  );
}

export default App;

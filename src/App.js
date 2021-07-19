import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Router className="App">
      <Navbar />
    </Router>
  );
}

export default App;

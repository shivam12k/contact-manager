import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" Component={Home} exact></Route>
          <Route path="/addContact" Component={Contacts}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;

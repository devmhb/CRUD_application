import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// imported component
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import Alluser from "./components/AllUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/add" element={<AddUser />} />
          <Route path="/alluser" element={<Alluser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";
import Navbar2 from "./componets/Navbar2";
import About from "./pages/About";

function App() {
  return (
    <div className="bg-pattern min-h-screen">
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<AddNote />} />
        <Route path="/about" element={<About />} />
        <Route path="/edit/:id" element={<EditNote />} />
      </Routes>
    </div>
  );
}

export default App;

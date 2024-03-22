
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NavBar from "./componets/NavBar"
import './index.css'
import AddNote from "./pages/AddNote"
import Contacts from "./pages/Contacts"
import EditNote from "./pages/EditNote"
import Navbar2 from "./componets/Navbar2"
function App() {
 
  return (
    <div className="bg-gray-50">
      {/* <NavBar/> */}
      <Navbar2/>
        <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/create" element={<AddNote/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/edit/:id" element={<EditNote/>}/>
        </Routes> 
    </div>
  )
}

export default App


import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NavBar from "./componets/NavBar"

function App() {
 
  return (
    <div>
      <NavBar/>
        <Routes>
              <Route path="/" element={<Home/>}/>
        </Routes> 
    </div>
  )
}

export default App

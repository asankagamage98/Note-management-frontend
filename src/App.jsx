import './index.css';

import {
  Route,
  Routes,
} from 'react-router-dom';

import TopNavbar from './componets/TopNavbar';
import About from './pages/About';
import AddNote from './pages/AddNote';
import EditNote from './pages/EditNote';
import Home from './pages/Home';

function App() {
    return (
        <div className="bg-pattern min-h-screen">
            <TopNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<AddNote />} />
                <Route path="/about" element={<About />} />
                <Route path="/edit/:id" element={<EditNote />} />
            </Routes>
        </div>
    )
}

export default App

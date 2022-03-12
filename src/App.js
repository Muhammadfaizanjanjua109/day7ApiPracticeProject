import './App.css';
// import Api from './Api';
// import Cardan from './Cardan';
// import Mainnav from './MainNav';
import { Routes, Route } from "react-router-dom";
import Mainapp from './Mainapp';
import About from './About';


function App() {
  return (
    <Routes>
    <Route exact path="/" element={<Mainapp />} />
    <Route path="/about" element={<About />} />
</Routes>

  );
}

export default App;

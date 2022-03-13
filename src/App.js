import './App.css';
// import Api from './Api';
// import Cardan from './Cardan';
// import Mainnav from './MainNav';
import { Routes, Route } from "react-router-dom";
import Mainapp from './Mainapp';
import About from './About';
import MainPage from './Catagories/MainPage';


function App() {
  return (
    <Routes>
    <Route exact path="/" element={<Mainapp />} />
    <Route path="/about" element={<About />} />
    <Route path="/filter" element={<MainPage />} />
</Routes>

  );
}

export default App;

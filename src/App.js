import './App.css';
import Api from './Api';
import Cardan from './Cardan';
import Mainnav from './MainNav';


function App() {
  return (
    <div className="App">
    <Mainnav/>
      <h1 className='h1'>Day 7 of 100 Days Code Chellenge</h1>
      <p>All Data by fetch api and design using bootstrap for react</p>
    <Api/>
   
    </div>
  );
}

export default App;

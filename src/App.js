import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import StarShip from './Components/StarShip';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='nav-bar'>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/starship">Star Ship</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/starship" element={<StarShip name="Hello" />} />
            <Route path="/about" element={<About />} />
            <Route path="/" />
          </Routes>
        </div>
      </Router>
      <h1><center>Please Click on Start Ship</center></h1>
      <h1><center><a className='gitLink' href='https://github.com/NadiaSultanaNS/react_student_hw'>Git Repo Link</a></center></h1>

    </div>
  );
}

export default App;

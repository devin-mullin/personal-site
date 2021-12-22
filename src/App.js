import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' />
      </Routes>
    </div>
  );
}

export default App;

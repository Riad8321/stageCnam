
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Entreprise from '../src/components/Entreprise/Entreprise'
import Stage from './components/stage/Stage'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entreprise" element={<Entreprise />} />
        <Route path="/stage" element={<Stage />} />
      </Routes>
    </div>
  );
}

export default App;

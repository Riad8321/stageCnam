
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Entreprise from '../src/components/Entreprise/Entreprise'
import Lbi from './components/lbi/Lbi'
import LeMetier from './components/leMetier/LeMetier'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entreprise" element={<Entreprise />} />
        <Route path="/lbi" element={<Lbi />} />
        <Route path="/metier" element={<LeMetier />} />
      </Routes>
    </div>
  );
}

export default App;

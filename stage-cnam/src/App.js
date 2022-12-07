
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Entreprise from '../src/components/Entreprise/Entreprise'
import Lbi from './components/lbi/Lbi'
import LeMetier from './components/leMetier/LeMetier'
import Bilan from './components/bilan/Bilan'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lbi" element={<Lbi />} />
        <Route path="/entreprise" element={<Entreprise />} />
        <Route path="/metier" element={<LeMetier />} />
        <Route path="/bilan" element={<Bilan />} />
      </Routes>
    </div>
  );
}

export default App;

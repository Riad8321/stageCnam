import { BrowserRouter as Router } from "react-router-dom"
import './App.css';
import Header from './components/header/Header';
import Hero from './components/Hero/Hero';
import Entreprise from '../src/components/Entreprise/Entreprise'

function App() {
  return (
    <Router>
    <div className="App">
      {/*<Header />*/}
      {/*<Hero />*/}
      <Entreprise />
    </div>
    </Router>
  );
}

export default App;

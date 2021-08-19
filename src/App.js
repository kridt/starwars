import './App.css';
import Film from './pages/Film';
import { Router } from "@reach/router";
import axios from 'axios';

function App() {

  

  return (
    <Router className="App">
            
      <Film path="/" />

    </Router>
  );
}

export default App;

import './App.css';
import Film from './pages/Film';
import { Router } from "@reach/router";
import Background from './components/Background';

function App() {

  

  return (
    <div className="App">
      <img className="backgroundimg" src="./images/star-wars-backgound.png" alt="background"/>
    <Router className="router">
      <Film path="/" />

    </Router>
    </div>
  );
}

export default App;

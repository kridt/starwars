import "./App.css";
import Film from "./pages/Film";
import { Router } from "@reach/router";
import Background from "./components/Background";
import Movies from "./pages/Movies";
import CharacterPage from "./pages/CharacterPage";

function App() {
  return (
    <div className="App">
      <img
        className="backgroundimg"
        src="./images/star-wars-backgound.png"
        // It is better to import first and then put in src
        // import backgound from "./images/star-wars-backgound.png";
        // <img className="backgroundimg" src={backgound} />
        alt="background"
      />
      <Router className="router">
        <Film path="/" />
        <Movies path="/movie/:id" />
        <CharacterPage path="/character/:id" />
      </Router>
    </div>
  );
}

export default App;

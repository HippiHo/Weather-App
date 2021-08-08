import sun from "./assets/weather-sun.svg";
import cloud from "./assets/weather-cloud.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sun} className="App-logo" alt="logo" />
        <img src={cloud} className="App-logo" alt="logo" />
        <p>Weather App</p>
      </header>
    </div>
  );
}

export default App;

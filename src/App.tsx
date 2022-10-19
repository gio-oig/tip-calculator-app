import ResultCard from "src/components/resultCard/resultCard";

import logo from "src/assets/logo.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <img className="logo" src={logo} alt="split tter" />
      <div className="calc-container">
        <div className="calc__calculator"></div>
        <ResultCard />
      </div>
    </div>
  );
}

export default App;


import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from "./Pages/LandingPage";
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LandingPage />

      </div>
    </BrowserRouter>

  );
}

export default App;

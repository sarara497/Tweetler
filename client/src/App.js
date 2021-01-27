
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from "./Pages/LandingPage/LandingPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SideNavbar from "./Components/SideNavbar/SideNavbar";
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={SideNavbar} />
          <Route path="/login" component={LoginPage} />
        </Switch>


      </div>
    </BrowserRouter>
 
  );
}

export default App;

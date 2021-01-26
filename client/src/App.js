import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from "./Pages/LandingPage/LandingPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/Home/HomePage"
import BookMarks from './Pages/BookMarks/BookMarks'
import Profile from './Pages/Profile/Profile'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Switch>
          <Route path="/" component={LandingPage} />
          <Route path="/" exact render={() => <HomePage/>} />
          <Route path="/login" component={LoginPage} />
          <Route path="/Profile" exact render={() => <Profile/>} />
          <Route path="/BookMarks" exact render={() => <BookMarks/>} />
        </Switch>

      </div>
      <BrowserRouter>

  );
}


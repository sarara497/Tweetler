import './App.css';
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import LandingPage from "./Pages/LandingPage/LandingPage";
import HomePage from "./Pages/Home/HomePage"
import BookMarks from './Pages/BookMarks/BookMarks'
import Profile from './Pages/Profile/Profile'

function App() {
  return (
      <div className="App">
        <switch>
        {/* <Route path="/" exact render={() => <LandingPage />} /> */}
        <Route path="/" exact render={() => <HomePage/>} />
        <Route path="/Profile" exact render={() => <Profile/>} />
        <Route path="/BookMarks" exact render={() => <BookMarks/>} />
        
        </switch>
      </div>
 

  );
}

export default App;

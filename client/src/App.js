import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from "./Pages/LandingPage/LandingPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/Home/HomePage"
import ExplorePage from './Pages/ExplorePage/Explore'
import BookMarks from './Pages/BookMarks/BookMarks'
import Profile from './Pages/Profile/Profile'
import signUp from './Pages/signUp/signup'
import SignUp from './Pages/signUp/signup';
// import './App.css';

function App() {
  const [name, setName] = useState('')
  const [image, setImage] = useState('https://www.w3schools.com/howto/img_avatar.png')
  const [email, setEmail] = useState('')
  const [id, setId] = useState(null)
  const [token, setToken] = useState(localStorage.getItem("Authorization"))
  // console.log('>>>>', token)


  useEffect(() => {
    loadUser()
  }, [])

  useEffect(() => {
    console.log('effectToken', token)
  }, [token])

  const setMyToken = (token) => {
    setToken(token)
  }

  const loadUser = () => {
    let options = {
      method: "get",
      headers: { "Content-Type": "application/json", Authorization: token, },
    };
    let path = 'http://127.0.0.1:8000/auth/users/me/';
    fetch(path, options)
      .then((data) => data.json())
      .then((data) => {
        console.log('data', data)
        setName(data.name)
        setImage(data.image)
        setEmail(data.email)
        setId(data.id)
        // setToken(localStorage.getItem("Authorization"))
      });
  }
  console.log('<<', token, ',,,', id)
  // console.log('(localStorage.getItem("Authorization")', localStorage.getItem("Authorization"))
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={(props) => token ? <Redirect to='/home' /> : (<LandingPage />)} />
        {/* <Route exact path="/" component={LandingPage} /> */}
        {/* <Route path="/login" component={LoginPage} /> */}
        <Route exact path='/login' render={(props) => token ? <Redirect to='/home' /> : (<LoginPage login={setMyToken} />)} />
        <Route exact path='/signup' render={(props) => token ? <Redirect to='/home' /> : (<SignUp signupFun={setMyToken} />)} />

        {/* <Route exact path="/signup" component={signUp} /> */}
        <Route exact path='/home' render={(props) => !token ? <Redirect to='/' /> : (<HomePage />)} />
        {/* <Route path="/home" exact component={HomePage} /> */}
        {/* <Route exact path='/profile' render={(props) => id ? (<Profile />) : <Redirect to='/home' />} /> */}
        <Route path="/explore" exact render={() => <ExplorePage />} />
        {/* <Route exact path='/bookmarks' render={(props) => id ? (<BookMarks />) : <Redirect to='/home' />} /> */}
      </Switch>
      <Route path="/bookmarks" exact render={() => <BookMarks />} />
      <Route path="/profile" exact render={() => <Profile id={id} />} />
      <Route path="/explore" exact render={() => <ExplorePage />} />

    </div>
  );
}

export default App;

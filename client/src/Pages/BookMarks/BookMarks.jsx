import React, { useEffect, useState } from 'react'
import NavBar from "../SharedComponents/NavBar";
import { BiSearchAlt2 } from "react-icons/bi";
import { Input } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TweetCard from "../../Components/CardPeopleTweet/PeopleTweet";
import SideBar from "../../Components/SideNavbar/SideNavbar";

import "./bookmark.css";
import TweetBody from "../../Components/CardPeopleTweet/newTweetBox";



const HomePage = ({ id }) => {
  const [tweets, setTweets] = useState(null)
  const [bookmarks, setBookmarks] = useState(null)

  useEffect(() => {
    getTweets()
  }, [])

  const getTweets = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pk: id })
    }
    fetch('http://127.0.0.1:8000/user/details', requestOptions)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setTweets(data.tweets)
        getBookmarks({ user_bookmarks: data.user_bookmarks })
      })
  }

  const getBookmarks = (obj) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
    }
    fetch('http://127.0.0.1:8000/tweet/bookmarks', requestOptions)
      .then(response => response.json())
      .then(data => {
        // window.location.reload()
        console.log('bookmarks', data)
        setBookmarks(data)

      })
  }
  return (
    <div className="homepage">
      <NavBar />
      <SideBar />
      <div className="book-div">Tweets Saved</div>
      <div className="Card-div">
        {
          bookmarks && bookmarks.map((tweet, id) => <TweetBody key={id} tweet={tweet} />)
        }
      </div>
    </div>
  );
};

export default HomePage;

import Reat, { useEffect, useState } from 'react'
import Trends from "../Trends/Trends"
import WhoToFollow from "../WhoToFollow/WhoToFollow"
import TopNav from "../TopNav/TopNav"
import TweetBox from "../TweetBox/TweetBox"
import PeopleTweet from '../CardPeopleTweet/PeopleTweet'
import NewTweet from '../NewTweet/NewTweet.jsx'
import TweetBody from '../CardPeopleTweet/newTweetBox'
import Search from "../Search/Search"

import './Main.css';
const Main = ({ id, match }) => {
  const [tweets, setTweets] = useState([])
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch('http://127.0.0.1:8000/tweet/', requestOptions)
      .then(response => response.json())
      .then((data) => {
        // console.log('tweet', data)
        setTweets(data)
      });
  }
    , [])

  // console.log(',,,,,,', console.log(match.path))
  return (
    <div className="main-comp">
      <div>
        <TopNav />
        {
          match.path === '/home' && <NewTweet tweet={tweets} setTweets={setTweets} id={id} />
        }

        {tweets.map((tweet, i) => {
          return <TweetBody tweet={tweet} id={id} key={i} />
        })}

      </div>
      <div className="main-trends-comp">
        <Search />
        <Trends />
        <WhoToFollow />
      </div>
    </div>
  );
}

export default Main;
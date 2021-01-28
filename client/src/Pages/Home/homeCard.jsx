import React from "react";
import { GoComment } from "react-icons/go";
import { RiRepeat2Fill } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";

import "./styleCard.css";
import { useRadioGroup } from "@material-ui/core";

function Cardd({ user }) {
    console.log('user', user)
    return (
        <div className="social-card">

            <div className="user-pic">
                <img
                    className="user-img"
                    src={user.image}
                    alt="nfl-logo"
                />

            </div>
            <div className="body-tweet">
                <header>
                    <div className="text-box">
                        <h4>{user.name}</h4>
                        <p>{user.tweets[0].time.split('T')[0]}</p>
                    </div>
                </header>
                <div>{user.tweets[0].tweet}</div>
                <div className="tweet-ref">
                    <div></div>
                    <img
                        className="pic-content"
                        src={user.tweets[0].img}
                        // src={tweet.img}
                        alt="nfl-pic"
                    />
                </div>

                <div className="footer-container">
                    <div className="footer-icons">
                        <GoComment className="icon-pic comment-pic" />
                        {/* &nbsp;&nbsp;2 */}
                        {user.tweets[0].comments.length}
                    </div>
                    <div className="footer-icons">
                        <AiOutlineLike className="icon-pic comment-pic" />
                        {/* &nbsp;&nbsp;90 */}
                        {/* {tweet.tweet_likes.length} */}
                        {user.tweets[0].tweet_likes.length}
                    </div>
                    <div className="footer-icons">
                        <BiBookmark className="icon-pic comment-pic" />
            &nbsp;&nbsp;
          </div>
                </div>
            </div>
        </div>
    );
}

export default Cardd;

import React from "react";
import { GoComment } from "react-icons/go";
import { RiRepeat2Fill } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";

import "./cardStyle.css";

function Card({ mydata }) {
  console.log('vvvvvvv', mydata)
  return (
    <div className="social-card">
      <div className="user-pic">
        <img
          className="user-img"
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
          alt="nfl-logo"
        />
      </div>
      <div className="body-tweet">
        <header>
          <div className="text-box">
            <h4>Mark Williams</h4>
            <p>10/1/2021 8:00am</p>
          </div>
        </header>
        <div className="tweet-ref">
          <img
            className="pic-content"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4Vd8q40566y6_OdxwPz1KK8f-MEFah-gJg&usqp=CAU"
            alt="nfl-pic"
          />
        </div>

        <div className="footer-container">
          <div className="footer-icons">
            <GoComment className="icon-pic comment-pic" />
            &nbsp;&nbsp;2
          </div>
          <div className="footer-icons">
            <RiRepeat2Fill className="icon-pic comment-pic" />
            &nbsp;&nbsp;7
          </div>
          <div className="footer-icons">
            <AiOutlineLike className="icon-pic comment-pic" />
            &nbsp;&nbsp;90
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

export default Card;

import React from "react";
import "./cardStyle.css";

function Card() {
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
            <img
              className="icon-pic comment-pic"
              src="assets/003-blank-squared-bubble.png"
              alt="icon-comment"
            />
            2
          </div>
          <div className="footer-icons">
            <img
              className="icon-pic"
              src="assets/002-retweet.png"
              alt="icon-retweet"
            />{" "}
            47
          </div>
          <div className="footer-icons">
            <img
              className="icon-pic like-pic"
              src="assets/004-e-commerce-like-heart.png"
              alt="icon-like"
            />
            190
          </div>
          <div className="footer-icons">
            <img
              className="icon-pic message-pic"
              src="assets/005-envelope.png"
              alt="icon-message"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

import React, { Component, useEffect, useState } from "react";
import "./profile.css";

import NavBar from "../SharedComponents/NavBar";
import Card from "./TwetterCard";

export default function Profile({ id }) {
  const [mydata, setMydata] = useState([])
  useEffect(() => {
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_Id: id })
    };
    let path = 'http://127.0.0.1:8000/user/details'
    fetch(path, options)
      .then((data) => data.json())
      .then((data) => {
        console.log("mydataa", data);
        setMydata([data])
      })
  }, [])

  // console.log('<<<<<<<<', mydata)
  // console.log("asd", id)
  return (
    <div class="row py-5 px-4">
      <NavBar />
      <div class="col-md-5 mx-auto">
        <div class="bg-white shadow rounded overflow-hidden">
          <div class="px-4 pt-0 pb-4 cover">
            <div class="media align-items-end profile-head">
              <div className="profilebg">
                <div class="profile mr-3">
                  <img
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                    alt="..."
                    class=" forProfile"
                  />
                </div>
                <div className="ForName">
                  <h4 class="mt-0 mb-0">Mark Williams</h4>
                  <p class="small mb-4">New York</p>
                </div>
                <button id="edit" href="#">
                  Edit profile
                  </button>
                <div className="forFollows">
                  <ul className="forFollow">
                    <li className="forli">
                      215
                        <br />
                      <i className="fori">Photos</i>
                    </li>
                    <li className="forli">
                      745
                        <br />
                      <i className="fori">Followers</i>
                    </li>
                    <li className="forli">
                      340
                        <br /> <i className="fori ">Following</i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="Buttons">
            <button className="b">Tweets</button>
            <button className="b">Tweets & Reply</button>
            <button className="b">Media</button>
            <button className="b">Likes</button>
          </div>

          <Card mydata={mydata} />
        </div>
      </div>
    </div>
  );

}


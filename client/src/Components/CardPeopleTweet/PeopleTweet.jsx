import "./peopletweet.css";
import { GoComment } from "react-icons/go";
import { AiOutlineRetweet } from "react-icons/ai";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { BiImage } from "react-icons/bi";

const PeopleTweet = () => {
  return (
    <div className="box-peopletweet">
      <div>
        <img
          src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
          alt="..."
          className="pic-People"
        />
      </div>
      <div className="div-name">
        <p id="pname">Mays Yassin</p>
        <p id="twdate">24 June at 2:00pm</p>
      </div>
      <p id="tweet-content">
        Traveling – it leaves you speechless, then turns you into a storyteller.
      </p>
      <img
        src="https://www.tibco.com/blog/wp-content/uploads/2017/12/traveling.png"
        alt="..."
        className="pictweet-People"
      />
      <div className="div-comment">
        <div className="div-commentt">
          <GoComment id="comt" />
        </div>
        <p id="commn">Comment</p>
      </div>
      <Button id="retweet-btn">
        <AiOutlineRetweet id="pic-retwt" />
        <p id="retwt"> Retweets</p>
      </Button>
      <div className="div-like">
        <div className="div-likke">
          <FavoriteIcon id="lik" />
        </div>
        <p id="Like"> &nbsp; Like</p>
      </div>
      <div className="div-book">
        <div className="div-boook">
          <BookmarkIcon id="bok" />
        </div>
        <p id="Book"> &nbsp; Save</p>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
          alt="..."
          className="pic-areaa"
        />
      </div>
      <div>
        <TextField
          id="filled-textarea"
          placeholder="tweet your reply"
          multiline
          className="text-areaa"
          variant="filled"
        />
        <div className="addd-pic">
          <Button className="img-btn" variant="contained">
            <BiImage className="add-img" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PeopleTweet;

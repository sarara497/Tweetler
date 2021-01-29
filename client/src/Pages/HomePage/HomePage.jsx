import SideNavbar from "../../Components/SideNavbar/SideNavbar";
import NavBar from "../SharedComponents/NavBar";
import Main from "../../Components/Main/Main";
import NewTweet from "../../Components/NewTweet/NewTweet";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <NavBar />
      <SideNavbar />
      <NewTweet />
      <Main />
    </div>
  );
};

export default HomePage;

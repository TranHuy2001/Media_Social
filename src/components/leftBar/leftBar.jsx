import { useContext } from "react";
import "./leftBar.scss";
import { AuthContext } from "../../context/authContext";

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext)
  return (
    <div className="left-bar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePicture} alt="user" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src="/src/assets/img/friend.png" alt="friends" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src="/src/assets/img/group.png" alt="group" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src="/src/assets/img/market.png" alt="market" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src="/src/assets/img/watch-movie.png" alt="watch" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src="/src/assets/img/memories.png" alt="memories" />
            <span>Memories</span>
          </div>
        </div>

        <hr/>

        <div className="menu">
            <span>Your Shortcuts</span>
            <div className="item">
              <img src="/src/assets/img/events.png" alt="events" />
              <span>Events</span>
            </div>
            <div className="item">
              <img src="/src/assets/img/game.png" alt="game" />
              <span>Gaming</span>
            </div>
            <div className="item">
              <img src="/src/assets/img/music.png" alt="music" />
              <span>Music</span>
            </div>
            <div className="item">
              <img src="/src/assets/img/torii.png" alt="animation" />
              <span>Animation</span>
            </div>
            <div className="item">
              <img src="/src/assets/img/gallery.png" alt="gallery" />
              <span>Gallery</span>
            </div>
            <div className="item">
              <img src="/src/assets/img/video.png" alt="video" />
              <span>Videos</span>
            </div>
            <div className="item">
              <img src="/src/assets/img/messages.png" alt="messages" />
              <span>Messages</span>
            </div>
        </div>

        <hr/>

        <div className="menu">
            <span>Other</span>
            <div className="item">
              <img src="/src/assets/img/fundraiser.png" alt="fundraiser" />
              <span>Fundraiser</span>
            </div>
            <div className="item">
              <img src="/src/assets/img/tutorials.png" alt="tutorials" />
              <span>Tutotials</span>
            </div>
            <div className="item">
              <img src="/src/assets/img/courses.png" alt="courses" />
              <span>Courses</span>
            </div>
        </div>

        <hr/>

        <div className="menu">
            <span>For Members</span>
            <div className="item">
              <img src="/src/assets/img/age-limit(18+).png" alt="age-limit" />
              <span>Age Limit</span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default LeftBar;

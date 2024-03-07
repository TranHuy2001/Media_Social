import "./navBar.scss";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const NavBar = () => {

  const {toggle, darkMode} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span> Social Media</span>
        </Link>
        <img src="/src/assets/img/house.png" alt="home" style={{width: '25px', height: '25px'}}/>
        { darkMode ? <img src="/src/assets/img/sun.png" alt="light_mode" style={{width: '25px', height: '25px', cursor: 'pointer'}} onClick={toggle}/> : <img src="/src/assets/img/full-moon.png" alt="dark_mode" style={{width: '25px', height: '25px', cursor: 'pointer'}} onClick={toggle}/>}
        <img src="/src/assets/img/apps.png" alt="apps" style={{width: '25px', height: '25px'}}/>
        <div className="search">
          <img src="/src/assets/img/magnifying-glass.png" alt="search" style={{width: '25px', height: '25px'}}/>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <img src="/src/assets/img/personal-profile.png" alt="person" style={{width: '25px', height: '25px'}}/>
        <img src="/src/assets/img/email.png" alt="email" style={{width: '25px', height: '25px'}}/>
        <img src="/src/assets/img/bell.png" alt="notifications" style={{width: '25px', height: '25px'}}/>
        <div className="user">
          <img src={currentUser.profilePicture} alt="user" style={{width: '25px', height: '25px'}}/>
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

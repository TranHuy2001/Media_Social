import Posts from "../../components/posts/posts"
import "./profile.scss"

const Profile = () => {
    return (
        <div className="profile">
            <div className="images">
                <img src="https://pbs.twimg.com/media/F-TkdTuakAAUmc5?format=jpg&name=small" alt="" className="cover" />
                <img src="https://staticg.sportskeeda.com/editor/2023/09/df73b-16947708825436-1920.jpg?w=840" alt="" className="profilePic" />
            </div>

            <div className="profileContainer">
            <div className="uInfo">
                <div className="left">
                    {/* facebook */}
                    <a href="">
                        <img src="/src/assets/img/facebook.png" alt="facebook" fontSize="large" style={{width: '25px', height: '25px'}}/>
                    </a>
                    {/* instagram */}
                    <a href="">
                        <img src="/src/assets/img/instagram.png" alt="instagram" fontSize="large" style={{width: '25px', height: '25px'}}/>
                    </a>
                    {/* twitter */}
                    <a href="">
                        <img src="/src/assets/img/twitter.png" alt="twitter" fontSize="large" style={{width: '25px', height: '25px'}}/>
                    </a>
                    {/* linkedInIcon */}
                    <a href="">
                        <img src="/src/assets/img/linkedin.png" alt="linkedin" fontSize="large" style={{width: '25px', height: '25px'}}/>
                    </a>
                    {/* pinterest */}
                    <a href="">
                        <img src="/src/assets/img/pinterest.png" alt="pinterest" fontSize="large" style={{width: '25px', height: '25px'}}/>
                    </a>
                </div>

                <div className="center">
                    <span>Furina</span>
                    <div className="info">
                        <div className="item">
                            <img src="/src/assets/img/locate.png" alt="location" fontSize="large" style={{width: '25px', height: '25px'}}/>
                            <span>New York</span>
                        </div>

                        <div className="item">
                            <img src="/src/assets/img/countries.png" alt="calendar" fontSize="large" style={{width: '25px', height: '25px'}}/>
                            <span>anime.com</span>
                        </div>

                    </div>
                    <button>Follow</button>
                </div>

                <div className="right">
                    <img src="/src/assets/img/mail.png" alt="mail" fontSize="large"  style={{width: '25px', height: '25px'}}/>
                    <img src="/src/assets/img/more-1.png" alt="more1" fontSize="large"  style={{width: '25px', height: '25px'}}/>
                </div>
            </div>

            <Posts />
            </div>
            
            
        </div>
    )
}

export default Profile 
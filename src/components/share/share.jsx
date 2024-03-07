import "./share.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Share = () => {

    const {currentUser} = useContext(AuthContext)
    return (
        <div className="share">
            <div className="container">
                <div className="top">
                    <img src={currentUser.profilePic} alt="" />
                    <input type="text" placeholder={`What's on your mind ${currentUser.name}?`} />
                </div>

                <hr />

                <div className="bottom">
                    <div className="left">

                        <input type="file" id="file" style={{display: "none"}} />
                        <label htmlFor="file">
                            {/* <img src="/client/src/assets/img/add-image.png" alt="add-image" style={{width: '25px', height: '25px'}} /> */}
                            <img src="/client/src/assets/img/add-image.png" alt="add-image"  />
                            <span>Add Image</span>
                        </label>

                        <div className="item">
                            {/* <img src="/client/src/assets/img/map.png" alt="map" style={{width: '25px', height: '25px'}} /> */}
                            <img src="/client/src/assets/img/map.png" alt="map" />
                            <span>Add Place</span>
                        </div>

                        <div className="item">
                            {/* <img src="/client/src/assets/img/friend.png" alt="friend" style={{width: '25px', height: '25px'}} /> */}
                            <img src="/client/src/assets/img/friend.png" alt="friend" />
                            <span>Tag Friends</span>
                        </div>

                    </div>

                    <div className="right">
                        <button>Share</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Share;
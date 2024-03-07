import { Link } from "react-router-dom";
import "./post.scss";
import Comments from "../comments/comments";
import { useState } from "react";

const Post = ({ post }) => {

  const [commnetOpen, setCommentOpen] = useState(false)

  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <img
            src="/src/assets/img/more.png"
            alt="more"
            style={{ width: "25px", height: "25px" }}
          />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt=""   className="postImage"/>
        </div>
        <div className="info">
            {/* like */}
          <div className="item">
            {liked ? 
              <img
                src="/src/assets/img/heart.png"
                alt="heart"
                style={{ width: "25px", height: "25px" }}
              />
             : 
              <img
                src="/src/assets/img/heart(not-clicked-yet).png"
                alt="not-click-yet"
                style={{ width: "25px", height: "25px" }}
              />
            }
            12 Likes
          </div>
          {/* comment */}
          <div className="item" onClick={()=> setCommentOpen(!commnetOpen)}>
            <img
              src="/src/assets/img/comment.png"
              alt="comment"
              style={{ width: "25px", height: "25px" }}
            />
            12 Comments
          </div>
          {/* share */}
          <div className="item">
            <img
              src="/src/assets/img/share1.png"
              alt="share"
              style={{ width: "25px", height: "25px" }}
            />
            Shares
          </div>

        </div>
        {commnetOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;

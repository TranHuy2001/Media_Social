import { useContext } from "react"
import "./comments.scss"
import { AuthContext } from "../../context/authContext"

const Comments = () => {

    const {currentUser} = useContext(AuthContext)

    const comments = [
        {
            id: 1,
            name: "Furina",
            userId: 1,
            profilePic: "/src/assets/img/Furina.jpg",
            img: "https://pbs.twimg.com/media/F-TkdTuakAAUmc5?format=jpg&name=small",
            desc: "I am the storm that is approaching Provoking black clouds in isolation"
        }
    ]

    return (
        <div className="comments">

            <div className="write">
                <img src={currentUser.profilePicture} alt="" />
                <input type="text" placeholder="write a comment" />
                <button>Send</button>

            </div>

            {comments.map(comment=>(
                <div className="comment" >
                    <img src={comment.profilePic} alt="avatar" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))}
        </div>
    )
}

export default Comments;
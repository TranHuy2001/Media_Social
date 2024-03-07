import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext";

const Stories = () => {

    const {currentUser} = useContext(AuthContext)

    //tạm thời
    const stories = [
        {
            id: 1,
            name: "Siuuu",
            img: "/src/assets/img/Siuuu.png"
        },
        {
            id: 2,
            name: "Siuuu",
            img: "/src/assets/img/Siuuu.png"
        },
        {
            id: 3,
            name: "Siuuu",
            img: "/src/assets/img/Siuuu.png"
        },
        {
            id: 4,
            name: "Siuuu",
            img: "/src/assets/img/Siuuu.png"
        },
    ];

    return (
        <div className="stories">
            <div className="story">
                    <span>{currentUser.name}</span>
                    <img src={currentUser.profilePicture} alt="" />
                    <button>+</button>
                </div>
            {stories.map(story=>(
                <div className="story" key={story.id}>
                    <span>{story.name}</span>
                    <img src={story.img} alt="" />
                    
                </div>
            ))}
        </div>
    )
}

export default Stories;
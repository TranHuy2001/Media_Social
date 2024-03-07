import "./posts.scss";
import Post from "../../components/post/post"

const Posts = () => {

    //tạm thời
    const posts = [
        {
            id: 1,
            name: "Furina",
            userId: 1,
            profilePic: "https://staticg.sportskeeda.com/editor/2023/09/df73b-16947708825436-1920.jpg?w=840",
            img: "https://pbs.twimg.com/media/F-TkdTuakAAUmc5?format=jpg&name=small",
            desc: "I am the storm that is approaching"
        },
        {
            id: 2,
            name: "Vergil",
            userId: 2,
            profilePic: "/src/assets/img/Furina.jpg",
            img: "https://staticdelivery.nexusmods.com/mods/2751/images/thumbnails/798/798-1600863312-1511229545.jpeg",
            desc: "I am the storm that is approaching"
        },
    ];
    return (
        <div className="posts">
            {posts.map(post=>(
                <Post post={post} key={post.id}/>
            ))}
        </div>
    )
}

export default Posts;
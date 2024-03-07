import "./rightBar.scss"

const RightBar = () => {
    return (
        <div className="right-bar">
            <div className="container">
                <div className="item">
                    <span>Suggestions For You</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="/src/assets/img/person-1.png" alt="user"/>
                            <span>Mikayuki</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="/src/assets/img/person-2.png" alt="user"/>
                            <span>Natsukawa</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="/src/assets/img/person-3.png" alt="user"/>
                            <p><span>Minamino</span> changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src="/src/assets/img/person-3.png" alt="user"/>
                            <p><span>Mitoma</span> changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src="/src/assets/img/person-3.png" alt="user"/>
                            <p><span>Sengoku</span> changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="/src/assets/img/person-4.png" alt="user"/>
                            <div className="online" />
                                <span>Dante</span>
                        </div>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src="/src/assets/img/person-2.png" alt="user"/>
                            <div className="online" />
                                <span>Misaki</span>
                        </div>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src="/src/assets/img/person-3.png" alt="user"/>
                            <div className="online" />
                                <span>Misaka</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RightBar
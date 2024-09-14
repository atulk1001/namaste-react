import User from "./User"

export default About = () => {
    return (
        <div className="about-container">
            <div className="content">
                <h1>About Us</h1>
                <h3>We are sample restaurant</h3>
            </div>
            <User name={"Atul K"} />
        </div>
    )
}
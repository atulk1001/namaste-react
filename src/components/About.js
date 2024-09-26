import {useState} from "react";
import User from "./User";
import UserContext from "../utils/UserContext";
export default About = () => {
  const [comment,setComment] = useState("Hello !!");
  console.log("About us rendered ...");
  return (
    <div className="m-10 p-10">
      <div >
        <h1>About Us</h1>
        <h3>We are sample restaurant</h3>
        <input onChange={(e) => setComment(e.target.value)} />
        <h3> Comments : {comment} </h3>
        <h3>
          Logged In User:
          <UserContext.Consumer>
            {(data) => data.loggedInUser}
          </UserContext.Consumer>
        </h3>
      </div>
      <div className="flex flex-row flex-wrap mt-10">
        <User name={"Atul K"} />
      </div>
    </div>
  );
};

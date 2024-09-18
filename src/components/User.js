import UserClass from "./UserClass";
const User = ({name}) => {
    return (
        <div>
        <div className="mt-10">
            <h3>Resources</h3>
        </div>
       
        
        <div className="float-left mt-10">
            <div>Name : {name}</div>
            <div>Experience: 10 years</div>
            <div>Domain : Healthcare, Telemetrix, Portal Development</div> 
              
        </div>
        <div className="float-right"><img src="https://avatars.githubusercontent.com/u/118344647?v=4" alt="avatar"/></div> 
        <UserClass name={"Atul K Verma"} domain={"UI Automation"}/>
        </div>
    )
}
export default User;
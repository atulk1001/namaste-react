import UserClass from "./UserClass";
const User = ({name}) => {
    return (
        <>
        <h3>Resources</h3>
        <div className="user-card">
            <div>Name : {name}</div>
            <div>Experience: 10 years</div>
            <div>Domain : Healthcare, Telemetrix, Portal Development</div> 
            <div><img src="https://avatars.githubusercontent.com/u/118344647?v=4" alt="avatar"/></div>   
        </div>
        <UserClass name={"Atul K Verma"} domain={"UI Automation"}/>
        </>
    )
}
export default User;
import React from "react";

class UserClass extends React.Component {
    constructor(props){
        console.log("Constructor called");
        super(props);
        this.state = {
            userInfo: {
                name:"Atul K Verma",
                location: "Ballia",
                company: "Microsoft"
            }
        };
    }
    async componentDidMount() {
        console.log("Component Mounted");
        let data = await fetch("https://api.github.com/users/atulk101");
        let json = await data.json();
        this.setState({userInfo:json});
    }
    componentDidUpdate() {
        console.log("Component updated");
    }
    componentWillUnmount() {
        console.log("Component unmounted");
    }
    render(){
        console.log("Component Rendered");
        const {name,location,company,avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
            <div>Name : { name }</div>
            <div>Company: { company }</div>
            <div>Location : { location }</div>
            <div><img src={avatar_url} alt="avatar"/></div>  
            </div>
        )
    }
}

export default UserClass;
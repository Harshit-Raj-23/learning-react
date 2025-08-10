import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default"
            }
        }

        console.log("Child constructor");        
    }

    async componentDidMount(){
        console.log("Child did mount");
        
        // API calls here
        const data = await fetch("https://api.github.com/users/Harshit-Raj-23");
        const json = await data.json();

        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate(){
        console.log("Child did update");        
    }

    componentWillUnmount(){
        console.log("Child unmounted");        
    }

    render(){
        console.log("Child render");
        
        const { name, location, avatar_url } = this.state.userInfo;
        
        const { count1, count2 } = this.state;

        return (
            <div className="user-card">
                <h1>Count1 : {count1}</h1>
                <button 
                    onClick={() => {
                        // NEVER UPDATE STATE VARIABLES DIRECTLY
                        this.setState({
                            count1: this.state.count1 + 1
                        });
                    }}>
                    Increse Count1
                </button>
                <h1>Count2 : {count2}</h1>
                <img src={avatar_url}></img>
                <h2>Name : { name }</h2>
                <h3>Address : { location }</h3>
                <h4>Contact : harshitkashyap447@gmail.com</h4>
            </div>
        );
    }
}

export default UserClass;
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
    }

    async componentDidMount(){
        // API calls here
        const data = await fetch("https://api.github.com/users/Harshit-Raj-23");
        const json = await data.json();

        this.setState({
            userInfo: json
        })
    }

    render(){
        const { name, location, avatar_url } = this.state.userInfo;

        return (
            <div className="flex justify-center items-center m-10">
                <div className="bg-white border rounded-2xl shadow-xl p-8 text-center w-full max-w-md hover:shadow-2xl transition-shadow duration-300">
                    <h1 className="font-bold text-3xl mb-6 text-gray-800">About Us</h1>
                    <img 
                    src={avatar_url} 
                    alt="Profile" 
                    className="rounded-full w-52 h-52 mx-auto object-cover border-2 border-blue-100 shadow-md"
                    />
                    <h2 className="text-2xl font-semibold mt-6 text-gray-900">{name}</h2>
                    <p className="mt-2 text-gray-600">
                    📍 {location}
                    </p>
                    <p className="mt-1 text-gray-600">
                    📧 harshitkashyap447@gmail.com
                    </p>                  
                </div>
            </div>
        );
    }
}

export default UserClass;
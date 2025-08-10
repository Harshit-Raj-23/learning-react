import { useState, useEffect } from "react";

const User = ({ name }) => {
    const [count1] = useState(0);
    const [count2] = useState(1);

    useEffect(() => (
        // API calls are made here
        getGitHubData()
    ), []);
    
    const getGitHubData = async () => {
        const data = await fetch(
            "https://api.github.com/users/Harshit-Raj-23"
        );
    }
    
    return (
        <div className="user-card">
            <h1>Count : { count1 }</h1>
            <h1>Count : { count2 }</h1>
            <h2>Name : { name }</h2>
            <h3>Address : Banglore</h3>
            <h4>Contact : harshitkashyap447@gmail.com</h4>
        </div>
    );
};

export default User;
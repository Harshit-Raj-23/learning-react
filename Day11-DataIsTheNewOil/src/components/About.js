import UserClass from "./UserClass";
import { Component } from "react";

// Classy component
class About extends Component{
    constructor(props){
        super(props);      
    }

    render(){        
        return (<div>
            <UserClass />
        </div>)
    }
}

/**
 * - Parent constructor
 * - Parent Render
 *   - First Constructor
 *   - First Render
 * 
 *   - Second Constructor
 *   - Second Render
 * 
 *   <DOM Updated - In Single Batch>
 * 
 *   - First ComponentDidMount
 *   - Second ComponentDidMount
 * 
 *  - Parent ComponentDidMount
 */

// Functional component
// const About = () => {
//     return (
//         <div>
//             <h1>About Page</h1>
//             <UserClass name={"Harshit Raj (class)"} location={"Banglore (class)"} />
//         </div>
//     );
// };

export default About;
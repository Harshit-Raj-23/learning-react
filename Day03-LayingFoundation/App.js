import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX (Transpile before it reaches the JS) - Parcel - Babel
// JSX => React.createElement => Object => HTML (DOM) (babel does all the conversion)

// React Element
const jsxHeading = (
    <h1 className="head" tabIndex="5">
        This is JSX Heading.
    </h1>
)

const element = (
    <span> 'Span element' </span>
)

// React components :
// Class based component - Old

// Functional component - New
const Title = () => {
    return <h1 className='head'>React component : 'Title'. {element}</h1>
}
// This is called Component Composition - putting one component inside another.
const Heading = () => (
    <div id='container'>
        {Title()}
        <Title />
        <Title></Title>
        <h1 className='heading'>React Functional Component.</h1>
    </div>
)


// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing react element inside root
root.render(<Heading />);
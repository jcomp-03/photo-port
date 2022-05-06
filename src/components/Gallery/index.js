import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/commercial/0.jpg";

// changing the value of a variable within a component does not cause the component to re-render
// React uses the virtual DOM, so changes to variables do not trigger re-renders to a component.
// We use React Hooks to force the component to know about changes. Hooks allows you to easily manage
// state within a component. Hooks are just JavaScript functions that follows two rules:
// #1: Only call Hooks from within React functions. Easy enough.
// #2: Only call Hooks at the top level. For example, don't call them inside 'for' loops, nested functions
// functions within your React component, or conditionals. 
const Gallery = () => {
    const currentCategory = {
        name: "Commercial",
        description: "Photos of grocery stores, food trucks, and other commercial projects,"
    };

    return (
        <section className="">
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.name}</p>
            <div className="flex-row">
                <img
                    src={photo}
                    alt="Commercial example"
                    className="img-thumbnail mx-1"
                />
            </div>
        </section>
    );
}

export default Gallery;
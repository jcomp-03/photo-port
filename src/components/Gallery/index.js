import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../PhotoList';

// changing the value of a variable within a component does not cause the component to re-render
// React uses the virtual DOM, so changes to variables do not trigger re-renders to a component.
// We use React Hooks to force the component to know about changes. Hooks allows you to easily manage
// state within a component. Hooks are just JavaScript functions that follows two rules:
// #1: Only call Hooks from within React functions. Easy enough.
// #2: Only call Hooks at the top level. For example, don't call them inside 'for' loops, nested functions
// functions within your React component, or conditionals. 
const Gallery = ({ currentCategory }) => {
    const {name, description } = currentCategory;

    return (
        <section className="">
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <PhotoList category={currentCategory.name} />
        </section>
    );
}

export default Gallery;
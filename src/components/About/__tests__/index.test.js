import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';


// we'll call the cleanup function using the afterEach
// global function from Jest
afterEach(cleanup);

// use the describe function to declare the component
// we're testing
describe('Testing the \'About\' component', () => {
    //renders About test
    // First test; we use the it function. First argument is a
    // string declaring what is being tested; in second argument
    // a callback function runs the test
    it('renders', () => {
        render(<About />);
    });

    // Second test
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

// release memory allocation between tests
afterEach(cleanup);

describe('Contact is rendering', () => {
    it('renders the ContactForm component', () => {
        render(<Contact />);
    });

    it('renders Contact snapshot', () => {
        const { asFragment } = render(<Contact />)
        expect(asFragment()).toMatchSnapshot()
    });

    describe('Attribute matches text content', () => {
        it("checks that <h1> tags matches text \"Contact em\"", () => {
            // Arrange
            const { getByTestId } = render(<Contact />);
            // Assert
            expect(getByTestId("contact-header")).toHaveTextContent("Contact me");
          });
    })

});
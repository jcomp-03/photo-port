import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

// we'll call the cleanup function using the afterEach
// global function from Jest
afterEach(cleanup);

const categories = [
  { name: "portraits", description: "Portraits of people in my life" },
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

// use the describe function to declare the component
// we're testing
describe("Testing the 'Nav' component", () => {
  // baseline test
  // First test; we use the it function. First argument is a
  // string declaring what is being tested; in second argument
  // a callback function runs the test
  it("renders", () => {
    render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />
    );
  });

  // snapshot test
  it("matches snapshot", () => {
    // render Nav
    const { asFragment } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // emoji visibility test
  describe("emoji is visible", () => {
    it("inserts emoji into the h2", () => {
      const { getByLabelText } = render(
        <Nav
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
        />
      );

      expect(getByLabelText("camera")).toHaveTextContent("📸");
    });
  });

  describe("links are visible", () => {
    it("inserts text into the links", () => {
      // Arrange
      const { getByTestId } = render(<Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />);
      // Assert
      expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
      expect(getByTestId("about")).toHaveTextContent("About me");
    });
  });
});

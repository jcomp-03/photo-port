import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";


function App() {
  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // we pass in as attributes to the component 'Nav' the const currentCategory,
  // its setter setCurrentCategory, and the array 'categories'
  return (
    <div>
      {/* Passing in the following values as props to the Nav component */}
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>

      <main>
        {!contactSelected ? (
          // React fragments --> <>. Shorthand for <React.Fragment></React.Fragment>
          <>
          <About></About>
          <Gallery currentCategory={currentCategory}></Gallery>
          </>
        ) : (
          <ContactForm></ContactForm>
        )
        
      }
      </main>
    </div>
  );
}

export default App;

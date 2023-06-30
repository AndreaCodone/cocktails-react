// import cocktailLogo from "./assets/cocktail.svg";
import { useState } from "react";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchBar";
import ProductSection from "./components/productSection";
import ProductList from "./components/productList";
import Contacts from "./components/contacts/Contacts";
import "./App.css";

function App() {
  const [productSection, setProductSection] = useState("");

  const onRender = () => {
    switch (productSection) {
      case "contacts":
        return <Contacts />;
      case "":
        return (
          <>
            <ProductList name="rum" setProductSection={setProductSection} />
            <ProductList name="vodka" setProductSection={setProductSection} />
            <ProductList name="gin" setProductSection={setProductSection} />
          </>
        );
      default:
        return (
          <ProductSection
            productSection={productSection}
            setProductSection={setProductSection}
          />
        );
    }
  };

  return (
    <div className="App">
      <Navbar />
      <ul>
        <li onClick={() => setProductSection("")}>Home</li>
        <li onClick={() => setProductSection("contacts")}>Contacts</li>
      </ul>
      <SearchBar />
      {onRender()}
    </div>
  );
}

export default App;

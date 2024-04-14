import Header from "./components/Header";
import { useLocation, Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";
import loadingAnimation from "../src/assets/img/loadingAnimation.svg"

function App({ cart, removeFromCart, changeQuantity }) {
  //Check if the page we are at is the home
  const isActive = useLocation().pathname === "/";
  //https://fakeapi.platzi.com/
  const [categories, setCategories] = useState(null);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategories = async function () {
      try {
        let response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        if (!response.ok) {
          throw new Error("Error in fetching data");
        }
        let result = await response.json();
        setCategories(result);
      } catch (error) {
        setError(error);
        console.log("Errore nel fetching data");
        setCategories(null);
      } finally {
        setLoadingCategories(false);
      }
    };

    getCategories();
  }, []);

  return (
    <>
      <Header
        cart={cart}
        categories={categories}
        removeFromCart={removeFromCart}
        changeQuantity={changeQuantity}
      />
      {loadingCategories ? <div className="loader">
        <img src={loadingAnimation} alt="loading-animation" />
      </div> : isActive ? <>
        <div className="home">
          <p>Welcome to</p>
          <h1>WebAcademy</h1>
          <p>
            Experience the ultimate online shopping destination! Explore our curated selection of fashion,
            jewelry, and electronics. Elevate your style and tech game with unbeatable deals and top-notch service.
            Shop now for everything you need to live your best life!
          </p>
          <Link to="products">
            <button>Shop Now</button>
          </Link>
        </div>
      </> : <Outlet />}
    </>
  );
}

export default App;

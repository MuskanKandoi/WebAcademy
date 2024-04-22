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
            Welcome to WebAcademy, your premier destination for mastering web development skills. 
            Whether you're just starting your journey or looking to advance your expertise, 
            our platform offers comprehensive courses, interactive quizzes, and community engagement
            to support your learning objectives. Dive into HTML, CSS, JavaScript, React.js  
            with confidence, and explore a world of opportunities in the dynamic field of web development.
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

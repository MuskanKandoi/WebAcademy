import Header from "./components/Header";
import { useLocation, Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";
import loadingAnimation from "../src/assets/img/loadingAnimation.svg";

function App({ cart, removeFromCart, changeQuantity }) {
  // Check if the page we are at is the home
  const isActive = useLocation().pathname === "/";

  // Hardcoded categories
  const hardcodedCategories = ["Frontend","Backend" , "Full Stack", "Additionals"];

  // Use state and effect hooks for loading
  const [categories, setCategories] = useState(hardcodedCategories);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoadingCategories(false); // Set loading to false since we are using hardcoded values
  }, []);

  return (
    <>
      <Header
        cart={cart}
        categories={categories}
        removeFromCart={removeFromCart}
        changeQuantity={changeQuantity}
      />
      {loadingCategories ? (
        <div className="loader">
          <img src={loadingAnimation} alt="loading-animation" />
        </div>
      ) : isActive ? (
        <>
          <div className="home">
            <p>Welcome to</p>
            <h1>WebAcademy</h1>
            <p>
            Welcome to WebAcademy, your premier destination for mastering web development skills. Whether you're just starting your journey or looking to advance your expertise, our platform offers comprehensive courses, interactive quizzes, and community engagement to support your learning objectives. Dive into HTML, CSS, JavaScript, React.js  with confidence, and explore a world of opportunities in the dynamic field of web development.
            </p>
            <Link to="products">
              <button>Start Learning</button>
            </Link>
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default App;

import pro1img from './htm.png'
import pro2img from './cs.png'
import pro3img from './jasc.png'
import pro4img from './full.png'
import pro5img from './fs.png'
import pro6img from './gitt.png'
import pro7img from './pro.png'
import pro8img from './r.png'
import pro9img from './mer.png'
import pro10img from './ang.png'
import { useEffect, useState } from "react";
import ItemCard from "./components/ItemCard";
import { useParams } from "react-router-dom";
import loadingAnimation from "../src/assets/img/loadingAnimation.svg"

function Products({ addToCart }) {
  const [products, setProducts] = useState(null);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();

  // Hardcoded product data
  const hardcodedProducts = [
    { id: 1, title: "HTML for Beginners", category: "Frontend", price: 1499, image: pro1img },
    { id: 2, title: "CSS from scratch", category: "Frontend", price: 1999, image: pro2img },
    { id: 3, title: "JavaScript: Beginners to Experts", category: "Frontend", price: 2499, image: pro3img },
    { id: 4, title: "Complete FrontEnd Bootcamp", category: "Frontend", price: 2999, image: pro4img},
    { id: 5, title: "Full Stack Bootcamp", category: "Full Stack", price: 4999, image: pro5img},
    { id: 6, title: "Mastering Git", category: "Additionals", price: 999, image: pro6img},
    { id: 7, title: "Project Cycle - 10 Mega Frontend Projects", category: "Additionals", price: 499, image: pro7img},
   { id: 8, title: "React:The complete guide", category: "Frontend", price: 1499, image: pro8img},
   { id: 9, title: "MERN stack", category: "Backend", price: 2999, image: pro9img},
   { id: 10, title: "Angular", category: "Backend", price: 999, image: pro10img},
    // Add more products as needed
  ];

  useEffect(() => {
    // Simulating loading delay
    const delay = setTimeout(() => {
      if (category === undefined) {
        setProducts(hardcodedProducts);
      } else {
        const filteredProducts = hardcodedProducts.filter(product => product.category === category);
        setProducts(filteredProducts);
      }
      setLoadingProducts(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, [category]);

  return (
    <>
      {loadingProducts ? (
        <div className="loader">
          <img src={loadingAnimation} alt="loading-animation" />
        </div>
      ) : (
        <div className="products">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <ItemCard product={product} addToCart={addToCart} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Products;

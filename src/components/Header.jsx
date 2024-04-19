import cartIcon from "../assets/img/cart-icon.svg";
import hamburgerIcon from "../assets/img/hamburger-icon.svg"
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Cart from "./Cart";

function Header({ cart, categories, removeFromCart, changeQuantity }) {
  const [cartSideBar, setCartSideBar] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(false)
  let location = useLocation();
  useEffect(() => {
    setCartSideBar(false);
    setHamburgerMenu(false);
  }, [location]);
  function handleCartSideBar() {
    setCartSideBar(!cartSideBar);
  }
  function handleHamburgerMenu() {
    setHamburgerMenu(!hamburgerMenu)
  }

  return (
    <div className="header">
      <button onClick={handleHamburgerMenu} className="ham-menu">
        <img className="hamburger-icon" src={hamburgerIcon} alt="" />
      </button>

      <h1>WebAcademy</h1>

      <ul className="navigation">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="products">Products</NavLink>
        </li>
        <li className="dropdown">
          <div className="categoriesBtn">Categories</div>
          <div className="dropdown-links">
            {categories &&
              categories.map((category) => (
                <NavLink key={category} to={"categories/" + category}>
                  {category}
                </NavLink>
              ))}
          </div>
        </li>
        <li>
          <NavLink to="about">About Us</NavLink>
        </li>
      </ul>
      <div className="cart-bar">
        {/*al click del button si aprira il div laterale*/}
        <button
          onClick={() => {
            handleCartSideBar();
          }}
        >
          <img className="cartIcon" src={cartIcon} alt="" />
          {cart.length > 0 && <p className="cart-quantity">{cart.length}</p>}
        </button>
      </div>
      {cartSideBar && (
        <div className="cart-sidebar">
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            changeQuantity={changeQuantity}
          />
        </div>
      )}
      {hamburgerMenu && (
        <div className="menu">
          <ul className="navigation-mobile">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="products">Products</NavLink>
            </li>
            <li className="dropdown">
              <div className="categoriesBtn">Categories</div>
              <div className="dropdown-links">
                {categories &&
                  categories.map((category) => (
                    <NavLink key={category} to={"categories/" + category}>
                      {category}
                    </NavLink>
                  ))}
              </div>
            </li>
            <li>
              <NavLink to="about">About Us</NavLink>
            </li>
          </ul>

        </div>
      )}
    </div>
  );
}
export default Header;

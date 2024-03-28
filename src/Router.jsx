import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Products from "./Products";
import About from "./About";
import { useEffect, useState } from "react";

const Router = () => {
  const [cart, setCart] = useState([]);
  //add to cart function
  function addToCart(product, quantity) {
    let totPrice = parseFloat((product.price * quantity).toFixed(2));
    //get the index to check if the element is already in cart
    let existingItemIndex = cart.findIndex(
      (item) => item.title == product.title
    );
    //if it's already in cart
    if (existingItemIndex !== -1) {
      //update array
      let updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity = quantity;
      updatedCart[existingItemIndex].totPrice = totPrice;
      //set new Cart
      setCart(updatedCart);
    } else {
      //else add a new item in the cart
      setCart([
        ...cart,
        {
          id: product.id,
          title: product.title,
          quantity: quantity,
          price: product.price,
          totPrice: totPrice,
          img: product.image,
        },
      ]);
    }
  }



  function removeFromCart(cart, id) {
    setCart(cart.filter((item) => id !== item.id));
  }

  function changeQuantity(cart, id, event, itemPrice) {

    let newQuantity = parseInt(event.target.value);
    let updatedCart = cart.map((item) => item.id == id ? { ...item, quantity: newQuantity, totPrice: newQuantity * itemPrice } : item);
    setCart(updatedCart)
    console.log(cart)

  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App cart={cart} removeFromCart={removeFromCart} changeQuantity={changeQuantity} />,
      children: [
        {
          path: "products",
          element: <Products addToCart={addToCart} />,
        },
        {
          path: "categories/:category",
          element: <Products addToCart={addToCart} />,
        },
        {
          path: "About",
          element: <About />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default Router;
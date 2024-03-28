import { useState } from "react";
function ItemCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const changeQuantity = (event) => {
    setQuantity(parseInt(event.target.value));
  };
  return (
    <>
      <div className="product-img">
        <img src={product.image} alt="product-image" />
      </div>
      <p className="product-title">{product.title}</p>

      <p className="product-price">{"$" + product.price}</p>
      <input
        type="number"
        min="1"
        max="20"
        value={quantity}
        onChange={changeQuantity}
      />
      {/*al click sara da prendere il valore in input e aggiornare lo state del carrello*/}
      <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
    </>
  );
}
export default ItemCard;

import { products } from "../db.js";

import Card from "./Card.jsx";

export default function Main(params) {
  return (
    <div className="main">
      <p>main</p>

      <div className="product-wrapper">
        {products.map((prod) => {
          return (
            <Card
              key={`id${prod.name}`}
              productName={prod.name}
              productDescription={prod.description}
              productPrice={prod.price}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}

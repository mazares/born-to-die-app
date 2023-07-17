import "./Card.css";

export default function Card(params) {
  const productName = params.productName;

  const productDescription = params.productDescription;

  const productPrice = params.productPrice;
  return (
    <div className="card">
      <h2>{productName}</h2>
      <p>{productDescription}</p>

      <p>{productPrice} $</p>
    </div>
  );
}

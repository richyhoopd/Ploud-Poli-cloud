import Star from "../Assets/Star-icon.svg";

export default function FilteredItem(props) {
  const { product } = props;
  return (
    <>
      <img
        src={product.image}
        alt=""
        className="form__confirm__workshops-products-product-img"
      />
      <div className="form__confirm__workshops-products-product-text">
        <h4>${product.price}</h4>
        <p>{product.name}</p>
        <div className="form__confirm__workshops-products-product-text-rate">
          <img src={Star} alt="" />
          <span>
            {product.rating} Estrellas, {product.numReviews} Reseñas
          </span>
        </div>
        <div className="form__confirm__workshops-products-product-text-benefits">
          <span>Entrega en 24H</span>

          <span>Garantia de 6 meses</span>

          <span>Garantía de {product.warranty} meses</span>

        </div>
      </div>
    </>
  );
}

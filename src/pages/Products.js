import { Link } from "react-router-dom";
import products from "../data";

const Products = () => {
  return (
    <section className="section ">
      <div className="products">
        {products.map((product) => {
          return (
            <div className="form-section">
              <div className="form" key={product.id}>
                <h5>{product.name}</h5>
                <Link to={`${product.id}`}>more info</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;

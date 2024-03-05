import React from "react";
import useFetch from "../useFetch";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const { data: products, loading } = useFetch(
    "http://localhost:2000/products"
  );

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:2000/products/${id}`)
      .then((response) => {
        console.log(response);
        // refetch();
      })
      .catch((error) => console.log(error));
  };

  if (loading) return <div>The Page is Loading...</div>;

  return (
    <div className="container">
      <div className="row mt-3">
        {products.map((product) => (
          <div className="col-12 col-md-4" key={product.id}>
            <div className="card" style={{ minHeight: "330px" }}>
              <img
                src={product.imgUrl}
                className="card-img-top"
                alt="..."
                style={{ height: "200px" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">{product.name}</h5>
                <p className="card-text text-center">{product.price}$</p>
                <p className="card-text text-center">
                  {product.quantity === 0 ? (
                    <p className="p-2 text-danger rounded text-canter mx-auto">
                      Not Available
                    </p>
                  ) : (
                    <p>{product.quantity}</p>
                  )}
                </p>
              </div>
              <div className="d-flex justify-content-evenly align-items-center">
                <button
                  className="btn btn-danger w-25 m-2"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
                <Link
                  className="btn btn-success w-50 m-2"
                  to={`/products/${product.id}`}
                >
                  More Details
                </Link>
                <Link
                  className="btn btn-info w-25 m-2"
                  to={`/edit/${product.id}`}
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

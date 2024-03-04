import React, { useEffect, useState } from "react";
import useFetch from "../useFetch";

const Products = () => {
  const { data: products, loading } = useFetch(
    "http://localhost:2000/products"
  );

  if (loading) return <div>Page Loading...</div>;

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
                    <p className="bg-danger p-2 text-light rounded text-canter w-50 mx-auto">
                      Not available
                    </p>
                  ) : (
                    <p>{product.quantity}</p>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

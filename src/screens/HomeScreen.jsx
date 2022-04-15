import React from "react";
import Product from "../components/Product";
import data from "../data";

export default function HomeScreen() {
  return (
    <div>
      <div className="row center">
        {data.products.map((p) => (
          <Product key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}

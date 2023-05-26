import React from "react";
import data from "./exam-data.json";

function Function1() {
  //กรอกสินค้าที่ is_editable_price เป็น false
  const Products = data.filter((product) => !product.is_editable_price);

  //คำนวณนำหนักสินค้า
  const productsTotal = Products.map((product) => {
    const subProductWeight = product.products.reduce(
      (total, subProduct) => total + subProduct.weight,
      0
    );
    return {
      name: product.name,
      total: subProductWeight,
    };
  });

  return (
    <div>
      <h1>Function 1</h1>
      {productsTotal.map((product, index) => (
        <div key={index}>
          <p>
            name: {product.name} totalSubProductWeight: {product.total}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Function1;

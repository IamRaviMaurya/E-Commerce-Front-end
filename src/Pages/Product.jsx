import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb"; // Ensure the import path is correct
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay"; // Ensure the import path is correct
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelateProducts from "../Components/RelateProducts/RelateProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrumb product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelateProducts/>
    </div>
  );
};

export default Product;

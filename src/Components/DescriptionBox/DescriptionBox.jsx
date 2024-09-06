import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox-navigator">
        <div className="descriptionBox-nav-box">Description</div>
        <div className="descriptionBox-nav-box-fade">Reviews (122)</div>
      </div>
      <div className="descriptionBox-description">
        <p>
          An innovative e-commerce platform offering a curated selection of
          trendy and timeless clothing. Our website provides a seamless shopping
          experience with easy navigation, detailed product descriptions, and
          secure checkout. We prioritize customer satisfaction with fast
          shipping and exceptional customer service.
        </p>
        <p>
          Discover our e-commerce platform, where shopping for the whole family
          is a breeze. Our website features dedicated sections for kids, men,
          and women, each offering a wide range of stylish and quality clothing.
          Easily add your favorite items to the cart and proceed with a smooth
          and secure checkout process. Enjoy a seamless shopping experience
          tailored to meet your needs.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;

import React, { useState } from "react";
import CardDesign from "./CardDesign";

const Navbar = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "") {
      return true;
    } else {
      return product.category === selectedCategory;
    }
  });

  return (
    <>
      <nav className="nav">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="select"
        >
          <option value="">All Categories</option>
          <option value="Shoes">Shoes</option>
          <option value="Fashion">Fashion</option>
          <option value="Phones">Phones</option>
        </select>
      </nav>

      <div className="cards_main_container">
        {filteredProducts.map((item) => {
          return (
            <CardDesign
              key={item.id}
              imgsrc={item.imgsrc}
              brandName={item.brandName}
              description={item.description}
              currentPrice={item.currentPrice}
              previousPrice={item.previousPrice}
              category={item.category}
              discount={item.discount}
            />
          );
        })}
      </div>
    </>
  );
};

export default Navbar;

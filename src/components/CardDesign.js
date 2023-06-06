import React from "react";
import Image from "../assets/Image";

export default function CardDesign({
  imgsrc,
  brandName,
  description,
  currentPrice,
  previousPrice,
  discount,
  category,
}) {
  return (
    <div className="card-box">
      <img src={imgsrc} alt={category} className="img-siz " />
      <div className="word-box">
        <div className="blur-text">{brandName}</div>
        <div className="descript">
          <span>{description}</span>
          <img
            className="fplogo"
            src={Image.flipkartLogo}
            alt="flipkart-logo"
          />
        </div>
        <div>
          <span className="price">{currentPrice}</span>{" "}
          <del className="blur-text">{previousPrice}</del>
          <span className="green-text">{discount}</span>
        </div>
        <div className="sav-deal-font">Saver Deal</div>
        {/* <div> Size 6, 7, 8 </div> */}
      </div>
    </div>
  );
}
